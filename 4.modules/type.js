var name = require('./name');
//var json = require('./json');
/**
 *
 */
var fs = require('fs');
var result = fs.readFileSync('json.json','utf8');
var json = JSON.parse(result);


console.log(name);
console.log(json);

console.trace();