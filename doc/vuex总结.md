<!-- TOC -->

- [vuex的使用](#vuex的使用)
  - [如何初始化](#如何初始化)
  - [main.js中注入sotre](#mainjs中注入sotre)
  - [项目结构要清晰](#项目结构要清晰)
  - [核心概念](#核心概念)
  - [进阶](#进阶)
  - [插件](#插件)
  - [表单操作，有两种办法](#表单操作有两种办法)

<!-- /TOC -->

# vuex的使用

## 如何初始化
``` javascript
imoprt Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

export default new Vuex.Store({
  store
})
```

## main.js中注入sotre
``` javascript
new Vue({
  el: '#app',
  sotre
})
```

## 项目结构要清晰
``` javascript
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```

## 核心概念
1. state
2. getters (state的计算属性)
3. mutations (必须为同步函数，修改state只能通过提交mutation，store.commit)
4. actions (可以包含异步操作，store.dispatch)
5. modules

## 进阶
1. mapGetters
2. mapMutations
3. mapActions
4. mapState
``` javascript
import {mapState,mapGetters, mapMuattions, mapActions} from "vuex"

export default {
  computed: {
    ...mapState(['count']), //可以将`this.count`映射为`this.state.count`
    ...mapGetters(['count']), 
  },
  methods: {
    ...mapMutations(['increment']), //可以将`this.increment()`映射为`this.$store.commit('increment')`
    ...mapActions(['increment']), //将`this.increment()`映射为`this.$store.dispatch('increment')`
  }
}
```

## 插件
``` javascript
//vuex自带Logger插件，可以在state变化的时候打印state
import createLogger from 'vuex/dist/logger'

const store = new Vuex.Store({
  plugins: [createLogger()]
})
```

## 表单操作，有两种办法

* 给`<input>`中绑定value，监听input或者change事件
``` html
<input :value="message" @input="updateMessage">
```

``` javascript
// ...
computed: {
  ...mapState({
    message: state => state.obj.message
  })
},
methods: {
  updateMessage (e) {
    this.$store.commit('updateMessage', e.target.value)
  }
}
```

* 使用带有 setter 的双向绑定计算属性
``` html
<input v-model="message">
```
``` javascript
// ...
computed: {
  message: {
    get () {
      return this.$store.state.obj.message
    },
    set (value) {
      this.$store.commit('updateMessage', value)
    }
  }
}
```