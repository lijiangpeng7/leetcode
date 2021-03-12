<template>
  <div>
    <div>原数组{{citys}}{{citys}}</div>
    <div>set去重{{uniqueCitys}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      citys: ["太原", "太原", "太原", "太原", "北京"],
      a: [1, 2, 3],
      b: [2, 4, 5],
    };
  },
  computed: {
    uniqueCitys() {
      return [...new Set(this.citys)];
    },
  },
  mounted() {
    for (let index = 0; index < 4; index++) {
      setTimeout(()=>{
        console.log(index);
      }, index * 1000)
    }
  },
  methods: {
    //利用Set
    union1(arr1, arr2) {
      return [...new Set([...arr1, ...arr2])];
    },
    intersection1(arr1, arr2) {
      
    },
    union2(arr1, arr2) {
      return arr1.concat(arr2.filter(v => !arr1.includes(v)));
    }
  },
};
</script>

<style>
</style>