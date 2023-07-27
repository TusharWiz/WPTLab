const http = require("http")
const fs = require("fs")
const url = require("url")
const m1 = require("./moduleforday12")

var server = http.createServer(function (req, resp) {
    var q = url.parse(req.url, true)
    resp.writeHeader(200, { "content-type": "text/html" })

    switch (q.pathname) {
        case "/home":
            var rs = fs.createReadStream("../public/addition.html")
            rs.pipe(resp)
            break;

        case "/update-data":
            console.log(q.query.num1)
            console.log(q.query.num2)
            switch (q.query.btn) {
                case "add":
                    var ans = m1.addition(parseInt(q.query.num1), parseInt(q.query.num2))
                    resp.write("Addition :" + ans)
                    resp.end
                    break;

                case "sub":
                    var ans = m1.subtraction(parseInt(q.query.num1), parseInt(q.query.num2))
                    resp.write("Subtraction :" + ans)
                    resp.end
                    break;

                case "mul":
                    var ans = m1.multiply(parseInt(q.query.num1), parseInt(q.query.num2))
                    resp.write("Multiplication :" + ans)
                    resp.end
                    break;

                default:
                    resp.write("Go to Home ")
                    resp.end("<a href='/home'>To home</a><br>")
        }



        default:
            resp.write("<h1>Inside default page</h1>")
            resp.end("Please go on home page")
            break;
    }
})

server.listen(3001, () => {
    console.log("Server started on port 3001")
})