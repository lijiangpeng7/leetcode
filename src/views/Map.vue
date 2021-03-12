<!--select互斥-->
<template>
  <div>
    <el-select
      style="width:300px"
      v-model="value"
      multiple
      clearable
      placeholder="请选择"
    >
      <el-option
        v-for="item in calcSceneId"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </el-option>
    </el-select>

    <el-select
      style="width:300px"
      v-model="value1"
      multiple
      clearable
      placeholder="请选择"
    >
      <el-option
        v-for="item in calcSceneId"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import mixin from "@/mixin/mixin";
export default {
  inject: {
    hello1: {
      default: 'hello1'
    }
  },
  mixins: [mixin],
  data() {
    return {
      sceneId: [
        { value: 0, label: "全部" },
        { value: 1, label: "优选广告位" },
        { value: 3, label: "视频播放页广告-便利贴广告" },
        { value: 5, label: "快手联盟" },
        { value: 6, label: "上下滑大屏广告" },
        { value: 7, label: "信息流广告" },
      ],
      value: [],
      value1: [],
    };
  },
  mounted() {
    let obj = {
      name: "bob",
    };
    let m = new Map();
    m.set(obj, "hah");
    // console.log(m.get(obj));
    // this.reload();
    // this.hello1();
    console.log(this.age)
  },
  computed: {
    calcSceneId() {
      let sceneId = [];
      sceneId.push(...this.value, ...this.value1);
      let filterArr = [];
      if (!sceneId.includes(0)) {
        filterArr = this.sceneId.filter((entry) =>
          sceneId.length > 0
            ? !sceneId.includes(entry.value) && entry.value !== 0
            : !sceneId.includes(entry.value)
        );
      } else {
        filterArr = [{ value: 0, label: "全部" }];
      }

      return [...filterArr];
    },
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        // console.log(newVal);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style></style>
