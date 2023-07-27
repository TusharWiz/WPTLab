const fs = require("fs");
fs.writeFileSync("2.txt","inside 2.txt file");
fs.readFile("2.txt",(err,data)=>{
    if(err){
        console.log(err)
    }else
    console.log(data.toString());
})