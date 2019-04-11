function distinctArray(arr){
  let newArr = [];
  // 方法一 es6写法使用了Set
  newArr = new Set(arr);
  return [...newArr];
  // 方法二
  arr.map(item=>{
    newArr.filter(it=>item===it).length !== 0 ? : newArr.push(item);
  });
}
