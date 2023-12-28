import fs from "fs";
import path from "path";

const createDay = () => {
    let day = process.argv.slice(2);
    day = parseInt(day);

    const sourceFilePath = './core/solutionTemplate.js';
    const destinationDirectory = './solutions';
    const newFileName = `day${day}.js`
    copyAndRenameFile(sourceFilePath, destinationDirectory, newFileName);

}

const copyAndRenameFile = (sourcePath, destinationDir, newFileName) => {
    // Ensure the source file exists
    if (!fs.existsSync(sourcePath)) {
        console.error('Source file does not exist.');
        return;
    }

    if (fs.existsSync(`${destinationDir}/${newFileName}`)) {
        console.error('Destination file exists.');
        return;
    }

    // Create the destination directory if it doesn't exist
    if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir, { recursive: true });
    }

    // Create the full path for the destination file
    const destinationPath = path.join(destinationDir, newFileName);

    // Copy the file
    fs.copyFile(sourcePath, destinationPath, (err) => {
        if (err) {
            console.error('Error copying file:', err);
        } else {
            console.log(`File copied from ${sourcePath} to ${destinationPath}`);
        }
    });
}

createDay()