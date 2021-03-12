## Symbol 应用场景 [https://blog.csdn.net/Tyro_java/article/details/79667169]

1. 作为对象属性名，具有隐藏性
``` javascript
let obj = {
  [Symbol('age')]: 11
}
```

2. 作为常量值
``` javascript
const EventName = {
  GAME_SATRT : Symbol(),
  GAME_OVER : Symbol()
}
```

3. 定义类的私有属性/方法
``` javascript
//a.js
const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass{

  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return this[snaf] = baz;
  }

  // ...
};
```

``` javascript
//b.js
import myClass from "myClass";

const inst = new myClass();

```

## BigInt [https://zhuanlan.zhihu.com/p/55303145]
> javascript能够安全计算的最大整数是**2^53-1**，超过会有意想不到的错误  
BigInt，解决了整数计算的精度问题

## Map
1. Map和Object的区别
``` javascript
//Object的key只能是string或者symbol类型；Map的key可以是任意类型 


```