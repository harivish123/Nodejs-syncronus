const fs = require('fs');
const readTxt = fs.readFileSync(`C:/Users/Dell/Documents/nodejs4/read.txt`,'utf8')

fs.readFileSync(`C:/Users/Dell/Documents/nodejs4/read.txt`,'utf8',(err,data) => {
    console.log(data);
    console.log(err);
})
