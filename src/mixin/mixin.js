//高复用的代码，组件方法可以全局混入，可以避免重复引入
//可以混合实例对象选项，如果有相同
const mixin = {
  methods: {
    $_hello() {
      console.log("hello mixin");
    },
  },
  data() {
    return {
      $_age: 18,
    };
  },
};

export default mixin;
