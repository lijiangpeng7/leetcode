import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./filters";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n

//点击外部隐藏
import vClickOutside from "v-click-outside";
Vue.use(vClickOutside);

// import i18n from '@/plugins/i18n';

//自定义指令
import directives from "@/utils/directives";

// //禁止f12
// import { init as ConsoleBan } from "console-ban";
// ConsoleBan()

//混入
// import mixin from "@/mixin/mixin";
// Vue.mixin(mixin);

// set ElementUI lang to EN
Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

import "@/icons"; //全局注册组件svg组件

//随机生成字符串
import Chance from "chance";
Vue.prototype.$chance = new Chance();

import VueDND from "awe-dnd";
Vue.use(VueDND);

Vue.config.productionTip = false;

//非父子组件传值使用空vue实例作为事件中央线 发布订阅模式
//也可以使用vuex管理，通过监听数据的改变执行对应的方法
Vue.prototype.bus = new Vue();

// fundebug 监测
import * as fundebug from "fundebug-javascript";
import fundebugVue from "fundebug-vue";
fundebug.init({
  apikey: "bd7e2a6facade98329f4fcb75a0cf0f35e34a947173275613b052a08fe83b4e3",
});
fundebugVue(fundebug, Vue);

import vueDragSelectPro from "vue-drag-select-pro";
// 注意：一定要引入css样式
import "vue-drag-select-pro/lib/vueDragSelectPro.css";
Vue.use(vueDragSelectPro);

import plugin1 from "@/plugin/plugin1";
Vue.use(plugin1);

new Vue({
  router,
  store,
  render: (h) => h(App),
  comments: true,
}).$mount("#app");

// new Vue({
//   el: '#app',
//   router,
//   store,
//   i18n,
//   components: {App},
//   template: '<App/>'
// })
