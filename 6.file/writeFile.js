var fs = require('fs');
console.log(1)
/**
 * 异步的方式把字符串写入文件
 * read r write w execute
 * 读      写       可执行
 * 二爷(写)一直(执行)死(4)读书
 * 4        2       1
 *
 * rw = 6
 *
 * -rw- 自己创建者拥有的权限
 * r--  所属组
 * r--  其它人
 *
 */

fs.writeFile('c.txt', '杨过1', {encoding:'utf8',flag:'w'},function(err, data) {
    console.log(err)
})

// fs.writeFile('c.txt',new Buffer('小龙女'),{flag:'a',encoding:'utf8'},function(err){
//     console.log(err);
// })

fs.appendFile('c.txt',new Buffer('剑'), function (err) {
    if (err) throw err;
});

console.log(Math.pow(2,6) - 1)


/**
 * base64
 *
 * base是把3个8位字节 转成4个6位字节 然后在6位字节前补两个0
 *
 */

var buf = new Buffer('剑');
console.log(buf);
// <Buffer e5 89 91>


console.log(parseInt("e5",16));
console.log(parseInt("89",16));
console.log(parseInt("91",16));
console.log((229).toString(2));
console.log((137).toString(2));
console.log((145).toString(2));
//11100101  10001001  10010001
//111001  011000  100110  010001
//00111001  00011000  00100110  00010001

console.log(parseInt("00111001",2));//57
console.log(parseInt("00011000",2));//24
console.log(parseInt("00100110",2));//38
console.log(parseInt("00010001",2));//17

var str = 'ABCDEFGHIJKLMNOPQRSTUVWZYX';
str += str.toLowerCase();
str += '0123456789';
str += '+/';
console.log(str)
console.log(str[57]+str[24]+str[38]+str[17]);