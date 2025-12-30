const fs = require('node:fs/promises')

async function readFromFile(){
    const data = await fs.readFile('test.txt','utf-8')
    console.log(data)
    console.log('after reading')
}
readFromFile()

console.log('Rest of website')