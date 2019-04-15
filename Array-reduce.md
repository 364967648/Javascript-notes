# reduce函数

reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。


## array.reduce(callback[, initialValue])

**callback**函数接收4个参数:
  - Accumulator (acc) (累计器)
  - Current Value (cur) (当前值)
  - Current Index (idx) (当前索引)
  - Source Array (src) (源数组)
  
 **initialValue**: 作为第一次调用 callback函数时的第一个参数的值
 
 ## 返回结果
 
 函数累计处理的结果


```
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
  return accumulator + currentValue;
});
```
