const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
//create a nex file or overwrite an exosting one
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`)
//add info to the existing file
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`, {flag: 'a'})
console.log('done with this task');
console.log('starting the next one');