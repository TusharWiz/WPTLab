const http = require("http")
const url = require("url")
const fs = require("fs")

var server=http.createServer(function(req,resp){
    var q = url.parse(req.url,true);
    resp.writeHeader(200,{"content-type":"text/html"});

    switch(q.pathname){
        case "/home":
            resp.write("<h1>Hello World</h1>")
            resp.write("<h3>Hello world</h3>")
            resp.end(" ")
            break;
    default:
        resp.write("<h1>Inside default</h1>")
        resp.end(" ")
    }
    
})

server.listen(3001,function(){
    console.log("server started at port 3001")
})

