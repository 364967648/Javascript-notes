Learn more or give us feedback
// 深度拷贝实现，将引用类型的数据复制一份，而不是引用拷贝
function copy(arr){
var obj = arr.constructor == "Array"?[]:{};
for(item in arr){

if(typeof arr[item]==="Object"){
obj[item] = copy(arr[item]);
}else {
obj[item]= arr[item];
}
}
return obj;
}
