var fs = require('fs');
var rs = fs.createReadStream('big.fbr');
var ws = fs.createWriteStream('big3.fbr');
rs.pipe(ws);

// 原理
// rs.on('data',function(data){
//     var flag = ws.write();
//     if (!flag) {
//         rs.pause()
//     }
//     console.log(data);
// });
// ws.on('drain',function(){
//     rs.resume();
// })