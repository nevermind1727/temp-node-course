const http = require("http")
const PORT = 5000

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("This is homepage")
    } else if (req.url === "/about") {
        res.end("This is about page")
    } else {
        res.end(`
        <h1>Oooops</h1>
        <p>Some error occured!</p>
        <a href="/">back home</a>
        `)
    }

})

server.listen(PORT, () => console.log(`Server started at ${PORT}`))