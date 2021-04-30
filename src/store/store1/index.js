import Vue from "vue";

//可以把对象变的可响应
export const store = Vue.observable({
  count: 1,
});

// export const store = {count: 1}

export const mutations = {
  setCount(count) {
    store.count = count;
  },
};
