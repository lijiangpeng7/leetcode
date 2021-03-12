<template>
  <div>
    {{ arr }}
  </div>
</template>

<script>
import { bubbleSort1, bubbleSort2 } from "@/utils/sort/bubbleSort";
import { selectionSort } from "@/utils/sort/selectionSort";
export default {
  data() {
    return {
      arr: [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48],
    };
  },
  mounted() {
    console.log(selectionSort(this.arr));
  },
};
</script>

<style></style>
