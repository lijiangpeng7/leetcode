//选择排序

export function selectionSort(arr) {
  let len = arr.length;
  let minIndex, temp;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
