import fs from 'node:fs'
const contentFile = fs.readFileSync('Serverless.txt',{encoding:'utf8'})
const lines = contentFile.split('\n');
 
console.log( lines.length );
