//冒泡排序

export function bubbleSort1(arr) {
  console.time("改进前的冒泡排序耗时");
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  console.timeEnd("改进前的冒泡排序耗时");
  return arr;
}

export function bubbleSort2(arr) {
  console.time("改进后的冒泡排序耗时");
  let low = 0,
    high = arr.length - 1;
  let temp, j;
  while (low < high) {
    for (j = low; j < high; j++) {
      //正向冒泡，找到最大
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    --high;
    for (j = high; j > low; j--) {
      //反向冒泡，找到最小
      if (arr[j] < arr[j - 1]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
    ++low;
  }
  console.timeEnd("改进后的冒泡排序耗时");
  return arr;
}
