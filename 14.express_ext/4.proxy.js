/**
 * 反向代理
 */
var express = require('express');
var proxy = require('http-proxy').createProxyServer;

var app = express();
function proxyPass (config) {
    return function(req,res,next) {
        var target = config[req.hostname]
        proxy.web(req,res,{
            target:target
        })
    }
}

app.use(proxyPass({
    'a.aroon.cn':'http://localhost:3000',
    'b.aroon.cn':'http://localhost:4000',
}))
app.listen(80)

var app3000 = express();
app.get('/',function(req,res){
   res.end('3000')
});
app3000.listen(3000)

var app4000 = express();
app.get('/',function(req,res){
   res.end('4000')
});
app3000.listen(4000)
