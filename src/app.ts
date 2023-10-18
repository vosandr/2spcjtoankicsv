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
    if(line.includes("\t")===true){
      writeStream.write(line.replace('  ', '<br>'));
    }
    else{
      writeStream.write(line.replace('/^/', '"'))
      writeStream.write(line.replace('/$/', ';"'+EOL));
    }
  })
  const rl1stline = readline.createInterface({
    input: fs.createReadStream(outputPath),
    crlfDelay: Infinity,
  });
  rl1stline.on('line', (line)=> {
    fs.writeFileSync('outputFile', line.replace('/^"/', ''));
    rl1stline.close();
  })
}
