const http = require('http')
const fs = require('fs')

//create a file
fs.writeFileSync('data.txt','hello!, I am learning node')

//update a file
fs.appendFileSync('data.txt',' Happy Coding!')

//read a file
const data = fs.readFileSync('data.txt')

console.log(data.toString());

//delete a file
fs.unlinkSync('data.txt');

