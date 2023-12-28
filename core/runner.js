import fs from "fs";
import runFunctionFromFile from "./dynamicImports.js";
import { getInput } from "./inputFetcher.js"

export const codeRunner = async (day, part, isTest) => {
    let inputData = "";
    const fileName = `./solutions/day${day}.js`;
    const solutionFilePath = `.${fileName}`
    if (!fs.existsSync(fileName)) {
        console.error('Solution file does not exist.');
        return;
    }
    if(isTest){
        const testFunctionName = `testInput`;
        inputData = await runFunctionFromFile(solutionFilePath, testFunctionName, []);
    }else{
        inputData = await getInput(day, isTest);
    }
    const functionName = `part${part}`;
    let ret =  await runFunctionFromFile(solutionFilePath, functionName, [inputData.trim()])
    return ret
}