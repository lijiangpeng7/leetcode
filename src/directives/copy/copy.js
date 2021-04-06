export default {
  bind(el, binding) {
    console.log(el);
    console.log(binding);
    el.addEventListener("click", function() {
      binding.value();
    });
  },
};
