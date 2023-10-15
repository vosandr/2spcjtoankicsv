import readline from 'readline';
import fs from 'fs';
export default (function (inputPath, outputPath) {
    var rl = readline.createInterface({
        input: fs.createReadStream(inputPath),
        output: fs.createWriteStream(outputPath)
    });
    rl.on('line', function (line) {
        line.includes("\t") === true ?
            line.replace('\t', '<br>') :
            line.replace('/^/', '"') && line.replace('/$/', ';"');
        fs.appendFileSync(__dirname + '/example2.txt', line);
    });
});
