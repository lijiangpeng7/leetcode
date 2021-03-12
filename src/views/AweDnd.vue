<!--your.vue-->

<script>
export default {
  data() {
    return {
      colors: [{
          text: "Aquamarine",
        },
        {
          text: "dd",
        },
        {
          text: "Hotpink",
        },
        {
          text: "Gold",
        },
        {
          text: "Crimson",
        },
        {
          text: "Blueviolet",
        },
        {
          text: "Lightblue",
        },
        {
          text: "Cornflowerblue",
        },
        {
          text: "Skyblue",
        },
        {
          text: "Burlywood",
        },
      ],
    };
  },
  /* if your need multi drag
  mounted: function() {
      this.colors.forEach((item) => {
          Vue.set(item, 'isComb', false)
      })
  } */
};
</script>

<template>
<div class="color-list">
  <div class="color-item" v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }" :key="color.text">
    {{ color.text }}
  </div>
</div>
</template>

<style lang="scss" scoped>
/deep/ .color-item {
  color: red;
  height: 50px;
  background: green;
}
</style>
