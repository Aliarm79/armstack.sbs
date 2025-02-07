const http = require("http")

http.createServer((req,res) => {
    res.write("fullstack engineer")
    res.end()
}).listen(3000)

console.log("server is running on 3000")
