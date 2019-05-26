var fs = require('fs');
var watchFn = function(currState,prevStat){
    console.log(currState);
    console.log(prevStat);
};
fs.watchFile('d.txt',{interval:300},watchFn);
setTimeout(function(){
    fs.unwatchFile('d.txt',watchFn)
},1000 *10)