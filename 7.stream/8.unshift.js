/**
 *
 */
var fs = require('fs');
var rs = fs.createReadStream('request.txt');
var StringDecoder = require('string_decoder').StringDecoder; // 解决乱码问题
//把请求里的请求行和请求头取出来。调用callback
function parseHeader(callback){
  var decoder = new StringDecoder('utf8');
  var headers = '';
  
  rs.on('readable', onReadable);
  
  function onReadable(){
    var chunk;
    while(null != (chunk = rs.read())){
        var str = decoder.write(chunk);
        if(str.match(/\n\n/)){
            var split = str.split(/\n\n/);
            headers += split.shift();
            rs.removeListener('readable',onReadable);
            var remain = split.join('/\n\n/');
            var buf = new Buffer(remain);
            if(buf.length)
              rs.unshift(buf);
            return callback(headers);
        }else{
            headers+=str;
        }
    }
  }
}

parseHeader(function(headers){
    console.log(1,headers);
    rs.setEncoding('utf8');
    rs.on('data',function(data){
        console.log(data);
    });
})