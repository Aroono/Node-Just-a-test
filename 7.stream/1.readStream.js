/**
 * 读文件
 * parse 通知对象停止触发data事件
 * resume 通知对象回复触发data时间
 * pipe 设置管道，将可读流里的内容导入到参数指定的可写流中
 * unpipe 取消数据通道
 * unshift 将数据块插回队列开头
 */
var fs = require('fs');
var rs = fs.createReadStream('a.txt',{
    start:0, end: 5, encoding: 'utf8',
    // highWaterMark: 3
});
// rs.setEncoding('utf8');
rs.on('open',function(){
 console.log('文件被打开了');
});
rs.on('error',function(err){
 console.log('出错了',err);
});
// 当读到数据的时候，调用回调函数
rs.on('data',function(data){
 console.log(data);
});

rs.on('end',function(){
 console.log('全部读取完毕');

});
rs.on('close',function(){
 console.log('文件被关闭了');
});
