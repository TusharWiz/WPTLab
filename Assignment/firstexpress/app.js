//Importing libraries
//express module -> create obj
const express = require("express")
const app =express();
const bodyparser = require("body-parser")
const routes = require("./route/router")
const path = require("path")
const mysql = require("mysql")

//Middle ware
app.use(bodyparser.urlencoded({extended:false}))

//configure app
app.set("views",path.join(__dirname,"view"))
app.set("view engine","ejs")

// app.use("/css",express.static(path.resolve(__dirname,"")))

//handle url/request
app.use("/",routes)

//start server
app.listen(3001,()=>{
    console.log("server started on port 3001")
})