/*
 * fs.writeStream 写入文件
 * http.ClientRequest 客户端请求对象
 * http.ServerResponse http中的响应对象
 * net.Socket Tcp中Socket对象
 * process.stdout 标准输出
 * process.stderr 错误输出
 * Gunzip 解压
 */
var fs = require('fs');
var rs = fs.createReadStream('a.txt');
var ws = fs.createWriteStream('b.txt');

ws.on('open', function(data) {
    console.log('开始写入文件')
})
rs.on('data', function(data) {
    ws.write(data)
})
rs.on('end', function(data) {
    ws.end('杨过', function() {
        console.log('结束写入')
        console.log('共写入%d个字节', ws.bytesWritten);
    })
})
rs.on('close', function(){
    console.log('文件关闭')
})
