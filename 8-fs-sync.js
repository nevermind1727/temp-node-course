const {readFileSync, writeFileSync} = require("fs")
const {resolve} = require("path")

const firstFile = readFileSync(resolve(__dirname, "content", "first.txt"), "utf-8")
const secondFile = readFileSync(resolve(__dirname, "content", "second.txt"), "utf-8")

const wordsCounter = (first, second) => {
    return first.split(" ").length + second.split(" ").length
}

const result = writeFileSync(resolve(__dirname, "content", "subfolder", "result-sync.txt"), `Count of word in both files: ${wordsCounter(firstFile, secondFile)}`)