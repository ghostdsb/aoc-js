import fs from "fs";
import fetch from "node-fetch";
import "dotenv/config";

export async function getInput(day, isTest) {

    if (fs.existsSync(`./input/${day}.txt`)) {
        const data = await readFileLocal(`./input/${day}.txt`);
        return data.trim();
    } else {
        let data = await fetchData(day);
        fs.writeFileSync(`./input/${day}.txt`, data);
        return data.trim();
    }
}

const fetchData = async (day) => {
    const session = process.env.AOC_SESSION
    const year = process.env.YEAR
    const url = `https://adventofcode.com/${year}/day/${day}/input`;
    try {
        const response = await fetch(url, {
            headers: {
                Cookie: `session=${session}`,
                "Content-Type": "application/text",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.text();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
};

const readFileLocal = (path) => {
    let data = fs.readFileSync(path, "utf-8");
    return new Promise((resolve, reject) => {
        resolve(data);
    });
}
