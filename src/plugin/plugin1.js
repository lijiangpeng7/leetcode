export default {
  install(Vue, options) {
    //定义全局属性，方法；
    Vue.myGlobaltest = "aaa";
    //注入组件选项
    Vue.mixin({});
    //添加实例的方法
    Vue.prototype.$myMethod = function() {};
  },
};
