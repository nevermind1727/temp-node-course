const {readFile, writeFile} = require("fs")
const {resolve} = require("path")

const wordCount = (first, second) => {
    return first.split(" ").length + second.split(" ").length
}

readFile(resolve(__dirname, "content", "first.txt"), "utf-8", (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile(resolve(__dirname, "content", "second.txt"), "utf-8", (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(resolve(__dirname, "content", "subfolder", "result-async.txt"), `Quantity of words in those 2 files: ${wordCount(first, second)}`, (err, result) => {
            if(err) {
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})