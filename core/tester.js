import { codeRunner } from "./runner.js";

const main = async () => {
    let [day, part] = process.argv.slice(2);
    day = parseInt(day);
    part = parseInt(part);

    let ans = await codeRunner(day, part, true);
    
    console.log(`DAY ${day} PART ${part}: ${ans}`)
}

main()