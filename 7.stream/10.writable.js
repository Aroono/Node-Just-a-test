var Writable = require('stream').Writable;
var fs = require('fs');
var util = require('util');
util.inherits(ConsoleStream, Writable);

function ConsoleStream(path){
    this._path = path;
    this._fd = fs.openSync(this._path, "a");
    Writable.call(this);
}

ConsoleStream.prototype._write = function(data,encoding,callback){
    console.log(data.toString());
    var len = fs.writeSync(this._fd, data, 0, data.length);
    console.log("len :", len);
    callback();
}
ConsoleStream.prototype.end = function(){
    this.end.call(this);
    fs.closeSync(this._fd);
}


var sd = new ConsoleStream('./d.txt');
sd.write('杨过','utf8',function(){
    console.log('杨过写入完毕');
    sd.write('小龙女','utf8',function(){
        console.log('小龙女写入完毕');
    });
})
