import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import createLogger from "vuex/dist/logger"

Vue.use(Vuex)

const state = {
  isLogin: 0,
  products: [
    { name: 'apple', price: 2 },
    { name: 'banana', price: 3 },
    { name: 'pear', price: 4 },
    { name: 'melon', price: 5 },
  ],
  username: null
}

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: debug ? [createLogger()] : [],
  strict: debug
})
