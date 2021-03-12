//默认导出，只能有一个
export default {
  a: 1
}

//命名导出可以解构导入
export var a = 1;

//call、bind、apply有什么不同 第一个参数都是this指向的对象
//都是改变函数中的this指向；不同之处在于参数的传递方式不同、返回不同
//bind返回函数，除此之外和call函数一样
//apply需要把参数以数组的方式传入
{
  let obj = {
    name: "jack",
    getName: function (a = "1 ", b = " 1") {
      console.log(a + this.name + b)
    }
  };
  let obj2 = {
    name: "bob"
  }
  obj.getName();
  obj.getName.call(obj2, "2 ", " 2");
  obj.getName.bind(obj2, "3 ", " 4")();
  obj.getName.apply(obj2, ["4 ", " 4"]);
}

//Vue.directive 自定义指令，有自己的钩子函数
import Vue from "vue"
import { padStart } from "core-js/fn/string";
import { resolve, reject } from "core-js/fn/promise";
Vue.directive("focus", {
  bind(el, binding, vnode, oldVnode) { //只调用一次，指令第一次绑定的时候调用

  },
  inserted(el, binding) { //被绑定元素插入父节点时调用

  },
  update(el, binding) { //所在组件的 VNode 更新时调用

  },
  componentUpdated(el, binding) { //指令所在组件的 VNode 及其子 VNode 全部更新后调用。

  },
  unbind(el, binding) { //只调用一次，指令与元素解绑时调用。

  }
})

//Vue 插件，用来增强技术栈的功能模块，目标是Vue本身
//Vue 组件，主要是构成业务模块，目标是App.vue

//test b branch
// ES6 
//let、const 
//在代码块内，使用let命令声明变量之前，该变量都是不可用的，称为“暂时性死区”的存在，且没有变量提升
//const声明变量的时候必须赋值

//解构 
{

  let [a, b] = ["bob", 14];
  let obj = { name: "bob", age: 14 }
  let { name, age } = obj;
}

//展开运算符 ... 数组 字符串
{
  //解构赋值
  let [a, ...b] = [1, 2, 3]; //a=1,b=[2,3]
  let arr = [1, 2, 3];
  //数组合并
  let arr3 = arr.concat([4]);
  let arr2 = [...arr, 4];

}

//字符串 新增方法 
{
  let str = "abc";
  str.padStart(10, 0);
  str.padEnd(10, 0);
  str.repeat(2);
  str.includes(1);
  str.startsWith("a");
  str.endsWith("a");
}

//b分支改动

//字符串模板 可以使用字符串占位符，减少了字符串拼接带来的麻烦

//数组 新增方法 findIndex
{
  var arr = [1, 2, 3];
  Array.from("111");
  Array.isArray(arr);
  arr.find(value => value == 1);
}

//箭头函数 其中没有this绑定，如果被非箭头函数包围，this指向最近的一个非箭头函数，否则this指向windows

//函数默认参数 可以给定默认参数，如果没有传递的话使用默认参数，不需要在函数体内判断参数是否传递

//模块 export import 命名导出（解构导入），默认导出（只能一个名字导入）

//Pormise 链式操作
{
  var wait = function () {
    return new Promise((resolve, reject) => {
      //执行各种操作
      resolve()
    })
  }
  wait.then(() => {

  })
}

//async await 将异步改为同步 
{
  function request(params) {
    return new Promise((resolve, reject) => { 
      if(params == 1){
        resolve(params * 2);
      } else{
        resolve(params * 2);
      }
    });
  }
  async function test(params) {
    let a = await request(1);
    let b = await request(2);
    let c = await request(3);
    console.log(a,b,c)
  }
  test();
}