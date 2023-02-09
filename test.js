const fs = require("fs").promises
// to use the package 
const {logger} = require("joagger"); 

//let username = process.argv[2];
//let age = process.argv[3];


let log = logger("Node 101");
// add text to (test.js file)
fs.appendFile('file.txt', `${username} ${age} years old\n`)
.then(() => {
    log.info("user inserted to the file")
})
.catch(e =>{
    log.error("sorry error happen")
})

// read the file 
// fs.readfile('file.txt', 'utf-8').then(console.log)


