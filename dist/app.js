import readline from 'readline';
import fs from 'fs';
export default (function (inputPath, outputPath) {
    var rl = readline.createInterface({
        input: fs.createReadStream(inputPath),
        crlfDelay: Infinity,
    });
    var writeStream = fs.createWriteStream(outputPath);
    rl.on('line', function (line) {
        if (line.includes("  ") === true) {
            writeStream.write(line.replace('  ', '<br>'));
        }
        else {
            writeStream.write(line.replace('/^/', '"'));
            writeStream.write(line.replace('/$/', ';"'));
        }
    });
});
