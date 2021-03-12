import Vue from 'vue';

//input输入时搜索防抖
Vue.directive('debounce', {
  inserted(el, binding, vnode, oldVnode) {
    let timer = null;
    el.addEventListener("input", (event) => {
      if(timer) {
        clearTimeout(timer);
      };
      timer = setTimeout(()=>{
        binding.value();
      }, 300)
    });
  }
})

Vue.directive('throllte')