<template>
  <div>
    <input type="text" ref="inp" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      tableData: [
      ],
    };
  },
  methods: {
    fn() {
      let timer = setInterval(() => {
        console.log(222222221);
      }, 1000);
      this.$once("hook:beforeDestroy", () => {
        console.log("执行");
        clearInterval(timer);
        timer = null;
      });
    },
  },
  mounted() {
    // this.timer = setInterval(() => {
    //   console.log(111);
    // }, 1000);
    this.fn();
  },
  beforeDestroy() {
    console.log("destory");
    // clearInterval(this.timer);
    // this.timer = null;
  },
};
</script>

<style>
</style>