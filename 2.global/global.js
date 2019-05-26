process.on('uncaughtException', function(e) {
    console.log('uncaughtException', e.message)
})

/**
 * global == window 全局对象
 * module 当前模块对象
 * exports 导出对象
 * require 加载模块的方法
 * __dirname 当前模块所在的目录的绝对路径
 * __filename 当前模块的绝对路径
 */

var name = 'mms';
exports.name = name;
console.log(this.name);
// console.log(global)

process.stdout.write('hello')
console.log(process.pid);
process.stdin.on('data', function(data){
    console.log(data.toString())
})

process.on('exit', function(){
    console.log('退出')
})
try {
    console.log(a)
} catch (e){
    console.log(e.message);
}

console.log(b);