exports.loaded = function(){
    console.log('a.js is loaded:',module.loaded);
}
console.log('A开始加载');
//var b  = require('./b');
exports.name = 'ssrs';

console.log('module.parent',module.parent);