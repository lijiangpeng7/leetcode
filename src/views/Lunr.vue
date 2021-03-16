<template>
  <div>
    <div id="mount-point"></div>
    <div ref="name">{{name}}</div>
    <input type="text" name="" id="" v-model="age">
    <input type="text" name="" id="" v-model="sex">
    <button @click="onResetForm">重置</button>

    <div>总数：{{count}}</div>
    <el-button @click="setCount(count+1)">改变</el-button>
  </div>
</template>

<script>
import Vue from "vue";
import {store, mutations} from '@/store/store1/'
// 创建构造器
const Profile = Vue.extend({
  template: "<p>{{firstName}} {{lastName}} aka {{alias}}</p>",
  data: function () {
    return {
      firstName: "Walter",
      lastName: "White",
      alias: "Heisenberg", 
    };
  },
});
const state = Vue.observable({count: 0})
export default {
  comments: true,
  data() {
    return {
      name: 'aa',
      age: '',
      sex: ''
    }
  },
  computed: {
    count() {
      console.log('count改变',store.count)
      return store.count
    }
  },
  mounted() {
    // 创建 Profile 实例，并挂载到一个元素上。
    new Profile().$mount('#mount-point');
  },
  methods: {
    setCount: mutations.setCount,
    onResetForm() {
      // this.$data = this.$options.data();
      
      Object.assign(this.$data, this.$options.data()) // 全部重置
    }
  },
};
</script>

<style lang="less" scoped>
</style>