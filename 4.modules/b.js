
exports.loaded = function(){
    console.log('b.js is loaded:', module.loaded);
}
console.log('B开始加载');
var a = require('./a');
a.loaded();
console.log('a.name', a.name);