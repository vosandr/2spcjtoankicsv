import readline from 'readline';
import fs from 'fs';
import {EOL} from 'os';
export default (inputPath: string, outputPath: string) => {
  const rl = readline.createInterface({ 
    input: fs.createReadStream(inputPath),
    crlfDelay: Infinity,
  }); 
  const writeStream=fs.createWriteStream(outputPath)
  rl.on('line', (line) => {
    if(line.includes("  ")===true){
      writeStream.write(line.replace('  ', '<br>'))
    }
    else{
      writeStream.write(line.replace('/^/', '"'))
      writeStream.write(line.replace('/$/', ';"'+EOL))
    }
  })
}
