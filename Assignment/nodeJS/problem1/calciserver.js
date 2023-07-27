const http = require("http")
const url = require("url")
const fs = require("fs")


var server = http.createServer((req,resp)=>{
    var q= url.parse(req.url,true)
    resp.writeHeader(200,{"content-type":"type/html"})

    switch(q.pathname){
        case "/home":
            
    }
})

server.listen(3001,()=>{
    console.log("Server started on port 3001");
})