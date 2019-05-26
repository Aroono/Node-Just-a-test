var Transform = require('stream').Transform;
var fs = require('fs');
var util = require('util');
var zlib = require('zlib');
var PassThrough = require('stream').PassThrough;

//实现一个文件加密的功能
util.inherits(TransferStream, Transform);
function TransferStream(){
    Transform.call(this);
}
TransferStream.prototype._transform = function(data,encoding,cb){
    for(var i=0;i<data.length;i++){
        data[i] = 255-data[i];
    }
    console.log(data)
    this.push(data);
    this.push(null);//表示完成
}
var transfer = new TransferStream();

fs.createReadStream('./password.txt').pipe(transfer).pipe(
    fs.createWriteStream('./password-secret.txt')
)


fs.createReadStream('./password.txt').pipe(zlib.createDeflate()).pipe(
    fs.createWriteStream('./password.gzip')
)

fs.createReadStream('./password.txt')
    .pipe(new PassThrough())
    .pipe(fs.createWriteStream('./password-through.txt')
)