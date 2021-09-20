const http = require("http")
const fs = require("fs")

http
  .createServer((req, res) => {
    const { url, method } = req

    if (url === "/" && method === "GET") {
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          res.statusCode = 500
          res.end("file not found...")
        } else {
          res.writeHead(200, {
            "Content-type": "text/html;charset='utf-8'",
          })
          res.end(data)
          return
        }
      })
    } else {
      res.statusCode = 404
      res.end("404 not found")
    }
  })
  .listen(3000, () => console.log("server is running at http://localhost:3000"))
