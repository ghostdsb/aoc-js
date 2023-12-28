const runFunctionFromFile = async (fileName, functionName, args) => {
    // Import the module dynamically using require
    var fileModule = await import(fileName);

    // Access and run the function by name
    return fileModule[functionName](...args);
}

export default runFunctionFromFile;
