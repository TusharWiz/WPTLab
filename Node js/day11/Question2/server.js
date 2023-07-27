const http = require("http")
const fs = require("fs")
const url = require("url")

var server = http.createServer((req,resp)=>{
    var q = url.parse(req.url,true)
    resp.writeHeader(200,{"content-type":"text/html"})

    switch(q.pathname){
        case "/home":
            
        break;
    }
})

server.listen(3001,()=>{
    console.log("Server start on port 3001");
})