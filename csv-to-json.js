var fs = require('fs');
var _ = require('underscore');
var sourceFileName = process.argv[2];
var destinationFileName = process.argv[3];
var concatted = '';

var fileContent = fs.readFileSync(sourceFileName, 'utf-8');
console.log(fileContent);
var contentLines = fileContent.split('\n');
console.log(contentLines);
var keys = contentLines[0].split(',');
var data = [];
for (var i = 1; i < contentLines.length; i++){
	data.push(contentLines[i].split(','));
}
var processedData = [];
for (i = 0; i < data.length; i++){
	processedData.push( _.object(keys, data[i]));
}
processedData = JSON.stringify(processedData);
console.log(processedData);
fs.writeFileSync(destinationFileName, processedData);
console.log('file converted to JSON object and saved to ' +destinationFileName);