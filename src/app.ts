import readline from 'readline';
import fs from 'fs';
export default (inputPath: string, outputPath: string) => {
  const rl = readline.createInterface({ 
    input: fs.createReadStream(inputPath),
    output: fs.createWriteStream(outputPath)
  }); 
  rl.on('line', (line) => {
    if(line.includes("\t")===true){
      fs.appendFileSync(outputPath, line.replace('\t', '<br>'))
    }
    else{
      fs.appendFileSync(outputPath, line.replace('/^/', '"'))
      fs.appendFileSync(outputPath, line.replace('/$/', ';"'))
    }
  })
}
