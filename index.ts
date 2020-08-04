import * as fs from 'fs'
import * as path from 'path'

var mainFile = path.resolve(__dirname, "..", "dist", "main.js");
var entryPointDir = path.resolve(__dirname, "src", "entrypoint")
var modelDir = path.resolve(__dirname, "src", "model")


if (!fs.existsSync(path.resolve(__dirname, "..", "dist"))) {
    fs.mkdirSync(path.resolve(__dirname, "..", "dist"))
}
if (fs.existsSync(mainFile)) {
    fs.unlinkSync(mainFile)
}
fs.writeFileSync(mainFile, "")


ReadInFolder(modelDir, "/* CLASS + VARIABLES */")
ReadInFolder(entryPointDir, "/* ENTRYPOINT */")


function ReadInFolder(inputPath: string, header: string) {
    var files = fs.readdirSync(inputPath)
    fs.appendFileSync(mainFile, header + '\n\n')
    files.forEach(file => {
        fs.appendFileSync(mainFile,
            "//Data from " + file + " \n" +
            fs.readFileSync(path.resolve(inputPath, file)) + '\n\n')
    });
    fs.appendFileSync(mainFile, "/*-----------*/")
}