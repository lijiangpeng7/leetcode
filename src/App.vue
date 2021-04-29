<template>
    <div id="app">
        <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/poster">Poster</router-link> |
      <router-link to="/download">Download</router-link> |
      <router-link to="/lunr">Lunr</router-link>
    </div>-->
        <router-view v-if="isShow" />
    </div>
</template>

<script>
export default {
    name: 'app',
    //全局注册方法
    provide() {
        return {
            hello1: this.hello,
        };
    },
    data() {
        return {
            isShow: true,
        };
    },
    methods: {
        reload() {
            this.isShow = false;
            this.$nextTick(function () {
                this.isShow = true;
            });
        },
        hello() {
            console.log('这是注入的方法');
        },
    },
};
</script>

<style lang="less">
html {
    height: 100%;
    box-sizing: border-box;
    font-size: 14px;
}
* {
    margin: 0;
    padding: 0;
}
</style>
