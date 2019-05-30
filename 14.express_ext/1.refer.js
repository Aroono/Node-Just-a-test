/**
 * 图片防盗链
 * Referer:http://localhost:63342/node201509/20.express_ext/img.html
 */
var express = require('express')
var path = require('path')

var app = express()
// 判断用户是否有权限访问此图片
app.use('/img', function(req, res, next) {
    var whitelist = ['b.aroon.cn']; // 设置白名单
    var referer = req.headers.referer
    if (!referer) {
        return next()
    }
    var refHosts = require('url').parse(referer).host.split(':')[0]
    console.log(refHosts, req.host)
    if (refHosts === req.host || whitelist.indexOf(req.host) !== -1) {
        return next()
    }
    res.sendFile(path.join(__dirname, 'img', 'wrong.jpg'))

})

app.use(express.static(__dirname))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'img.html'))
})
app.listen(8080);
