const fs = require("fs")
fs.writeFileSync("1.txt","Inside the file number one");
var data = fs.readFileSync("1.txt")
console.log(data.toString());