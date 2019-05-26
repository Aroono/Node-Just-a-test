// process.argv.forEach(function(val, index, array) {
//     console.log(val, index, array)
// })

// 当前目录
console.log(process.cwd())
console.log(__dirname)

//change directory 改变当前目录
process.chdir('..')
process.chdir(__dirname)
process.chdir('global')

console.log(process.cwd())
console.log(__dirname)
