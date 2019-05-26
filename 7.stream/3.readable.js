var fs = require('fs');
var rs = fs.createReadStream('a.txt',{start:0, end: 5});
var arr = [];
rs.on('readable',function(){
    console.log('====readable====');
    // var data = rs.read(1)
    // console.log(data)
    var data;
    while(null != (data = rs.read())){
        arr.push(data);
    }
});

rs.on('end',function(){
    var result = Buffer.concat(arr);
    console.log(result.toString());
});