<template>
  <div class>
    <div @click="onDownloadText">下载text</div>
    <div @click="onDownloadImg">下载img</div>

    <img id="wolf" src="https://httpbin.org/image" alt />
    <div @click="onScreenfull">全屏</div>
  </div>
</template>

<script>
import { saveAs } from "file-saver";
import screenfull from "screenfull";
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {
    var twoSum = function(nums, target) {
      for (var i = 0; i < nums.length; i++) {
        let otherNum = target - nums[i],
          otherIdx = nums.indexOf(otherNum);

        if (otherIdx != -1 && otherIdx != i) {
          return [i, otherIdx];
        }
      }
    };

    console.log(twoSum([2, 7, 11, 15], 9));
  },
  methods: {
    onDownloadText() {
      var blob = new Blob(["Hello, world!"], {
        type: "text/plain;charset=utf-8"
      });
      saveAs(blob, "hello world.txt");
    },
    onDownloadImg() {
      saveAs("https://httpbin.org/image", "image.jpg");
    },
    //全屏显示元素，默认全屏当前页面
    onScreenfull() {
      let element = document.querySelector("#wolf");
      if (screenfull.isEnabled) {
        screenfull.request(element);
      } else {
        // Ignore or do something else
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>