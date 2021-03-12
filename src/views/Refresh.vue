<template>
  <div class>
    <p>刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面刷新过渡页面</p>
    <div @click="onBack">返回</div>
  </div>
</template>

<script>
export default {
  name: "refresh",
  data() {
    return {};
  },
  props: {},
  components: {},
  beforeCreate() {
    // this.$router.push("/about");
  },
  created() {
    this.$router.push("/about");
  },
  mounted() {},
  methods: {
    onBack() {
       this.$router.push(this.$route.query.path);
    }
  }
};
</script>

<style lang="less" scoped>
</style>