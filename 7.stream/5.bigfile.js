var fs = require('fs');
var rs = fs.createReadStream('a.txt', {highWaterMark:1});
var ws = fs.createWriteStream('c.txt', {highWaterMark:2});
var last = true;
rs.on('data',function(data){
    var flag = ws.write(data);
    console.log(flag)
    // if(last != flag){
    //     console.log(flag);
    //     last = flag;
    // }
});
//当可写流里的缓存区全部写入目标文件里的时候触发
ws.on('drain',function(){
    console.log('drain');
});