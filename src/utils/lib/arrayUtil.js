/**
 * 数组去重
 * @param {*} arr 
 */
export function depuli(arr) {
    var newArr = []
    for (let i in arr) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

/**
 * 数组乱序
 * @param {*} arr 
 */
export function de(arr) {
    var len = arr.length
    for (let i in arr) {
        var rand = parseInt(Math.random() * len)
        var temp = arr[rand]
        arr[rand] = arr[i]
        arr[i] = temp
    }
}

/**
 * 获取元素出现的次数
 */
export function getEleCount(arr, ele) {
    var num = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
      if (ele == arr[i]) {
        num++;
      }
    }
    return num;
}

/**
 * 判断是否为一个数组
 * @param {*} arr 
 */
export function isArray(arr) {
    return Object.prototype.toString.call(arr) ==='[object Array]';
}

/**
 * 判断是否包含某个元素
 * @param {*} arr 
 * @param {*} ele 
 */
export function contains(arr, ele) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(ele == element) return true;
    }
    return false;
}

/**
 * 删除某个元素
 * @param {*} arr 
 * @param {*} ele 
 */
export function remove(arr, ele) {
    let eleIdx = arr.indexOf(ele);
    if( eleIdx == -1) return arr;

    arr.splice(eleIdx, 1);
    return arr;
}
