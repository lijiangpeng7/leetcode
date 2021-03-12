<template>
  <div class>
    <!-- <input type="text" :value="username" @input="updateName"> -->
    <input type="text" v-model="username" />
    <div @click="onLogin">登录</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLogin"]),
    username: {
      get() {
        return this.$store.username;
      },
      set(value) {
        this.SAVE_USERNAME(value);
      },
    },
  },
  methods: {
    ...mapMutations(["SAVE_USERNAME"]),
    onLogin() {
      this.$store.dispatch("setIsLogin");
      // this.$router.go(-1); //登录成功后返回上一页
      this.$router.push("/"); //登录成功后重定向
    },
    //更新用户名
    updateName(e) {
      this.SAVE_USERNAME(e.target.value);
    },
  },
};
</script>

<style lang="less" scoped>
</style>