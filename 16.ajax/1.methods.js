/**
 * 获取一系列函数的最大返回值
 */
function Max1() {return 1;}
function Max2() {return 2;}
function Max3() {return 3;}

function getMax() {
    var fns = [Max1, Max2, Max3];
    var max = fns[0](), maxFn = fns[0];
    for (var i = 1; i < fns.length; i++) {
        var val = fns[i]();
        if (val > max) {
            max = val;
            maxFn = fns[i];
        }
    }
    getMax = maxFn;
    return max;
}
var max1 = getMax();
var max2 = getMax();

console.log(max1, max2);


/**
 * 数字遍历方法
 */
var util = {
    each:(function(){
        if(Array.prototype.forEach) {
            return function(list, fn, context){
                list.forEach(fn, context);
            }
        }else{
            return function(list, fn, context){
                for(var i=0; i<list.length; i++){
                    fn.call(context, list[i], i, list);
                }
            }
        }
    })()
}

var arr = [1,2,3];
util.each(arr,function(item,index,all){
    console.log(this.name,item,index,all);
}, {name: 'ssrs'});