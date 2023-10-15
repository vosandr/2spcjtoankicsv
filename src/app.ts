import readline from 'readline';
import fs from 'fs';
export default (inputPath: string, outputPath: string) => {
  const rl = readline.createInterface({ 
    input: fs.createReadStream(inputPath),
    output: fs.createWriteStream(outputPath)
  }); 
  rl.on('line', (line) => {
      line.includes("\t")===true?
      line.replace('\t', '<br>'):
      line.replace('/^/', '"')&&line.replace('/$/', ';"')
    fs.appendFileSync(outputPath, line)
    }
  )
}
