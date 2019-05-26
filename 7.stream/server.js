var http = require('http');
http.createServer(function(req,res){
//   res.end('4044')
console.log(req.rawHeaders)
  req.setEncoding('utf8')
  req.on('data',function(data){
    console.log(data.toString());
  });
}).listen(8080);