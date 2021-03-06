## Symbol 应用场景 [https://blog.csdn.net/Tyro_java/article/details/79667169]

1. 作为对象属性名，具有隐藏性

```javascript
let obj = {
  [Symbol("age")]: 11,
};
```

2. 作为常量值

```javascript
const EventName = {
  GAME_SATRT: Symbol(),
  GAME_OVER: Symbol(),
};
```

3. 定义类的私有属性/方法

```javascript
//a.js
const bar = Symbol("bar");
const snaf = Symbol("snaf");

export default class myClass {
  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return (this[snaf] = baz);
  }

  // ...
}
```

```javascript
//b.js
import myClass from "myClass";

const inst = new myClass();
```

## BigInt [https://zhuanlan.zhihu.com/p/55303145]

> javascript 能够安全计算的最大整数是**2^53-1**，超过会有意想不到的错误  
> BigInt，解决了整数计算的精度问题

## Map

1. Map 和 Object 的区别

```javascript
//Object的key只能是string或者symbol类型；Map的key可以是任意类型
```

## 新增的语法

1. let const
2. Array 的扩展 Array.from()，find()，findIndex()，includes()，entyrs()，keys()，values()，flat()
3. 字符串的扩展 模板字符串 trimStart(), trimEnd(), includes(), padStart(), replaceAll()
4. Number 扩展，Number.isFinite(),Number.isNaN(), Number.parseInt(), Number.parseFloat()
5. 函数的扩展， 指定函数默认值。可以与解构赋值的默认值结合。箭头函数 this 指向定义的时候对象
6. 解构赋值，数组解构，对象解构
7. symbol 类型
8. Proxy
9. 箭头函数，函数参数默认值
10. 指数运算符 **2\*\*2**(4)
11. Set 和 Map

```javascript
Number.isInteger(22);
Number.parseInt(); //减少全局的方法，使得语义逐步模块化
```
