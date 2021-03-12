<template>
  <div class>
    binner <br>
    
    <label for="fff">fff</label>
    <input name="fff" type="text" v-model="first">

    <label for="people">people</label>
    <input name="people" type="text" v-model="people.name">
    
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      first: 2,
      people: {
        name: 'li',
        age: 12
      }
    };
  },

  watch: {
    $route: {
      handler(route) {
        console.log("route change", route);
      },
      immediate: true, //设置为true，一刷新页面就会执行handler方法
      deep: true //可以深入监听，对象里面的值发生改变，也可以监听到
    },
    first(newVal, oldVal) {
      console.log(oldVal, newVal)
    },
    people: {
      deep: true,
      //newVal和oldVal一样，无法监测哪个属性发生了变化
      handler(newVal, oldVal){
        console.log(newVal, oldVal)
      }
    }
  },
  computed: {

  },
  props: {},
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
</style>