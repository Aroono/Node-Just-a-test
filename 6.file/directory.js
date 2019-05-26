/**
 * 操作目录
 */
var fs = require('fs');
//创建一个目录
// fs.mkdir('test',function(err){
//     if(err)
//     console.log(err);
// })

function makeP(path){
    var paths = path.split('/');
    console.log(paths);
    for(var i=0;i<paths.length;i++){
        var curr = paths.slice(0,i+1).join('/');
        var exits = fs.existsSync(curr);
        if(exits){
            var stat = fs.statSync(curr);
            if(stat.isFile()){
                throw Error('路径中存在文件!');
            }
        }else{
            fs.mkdirSync(curr);
        }
    }
}

makeP('test/test/test',function(err){
    if(err)
        console.log(err);
});

// fs.stat('c.txt',function(err,data){
//     console.log(data);
// })

//取得相对路径的绝对路径
fs.realpath('./c.txt',function(err,pa){
   console.log(pa);
})

//更新时间属性
// fs.utimes('./c.txt',new Date(),new Date(),function(){});

//修改权限
// fs.chmod('./c.txt',0000);

// fs.rename('./c.txt','d.txt');

// fs.stat('./d.txt',function(err,stat){
//     console.log(stat.size);
//     fs.truncate('./d.txt',3,function(){
//         fs.stat('./d.txt',function(err,stat){
//             console.log(stat.size);
//         })
//     });
// })
//删除空目录
// fs.rmdir('test');
//     function rmdirRF(path){
// }