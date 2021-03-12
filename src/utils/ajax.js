export function ajax(url, methed, data) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "url", true);
  xhr.send("hhh");

  return new Promise((resolve, reject) => {
    xhr.onerror = err => reject && reject(err)
    //readyState改变时，会触发该函数
    xhr.onreadystatechange = function () {
      if (this.status == 200 && this.readyState == 4) {
        resolve(JSON.parse(xhr.responseText));
      }else{
        reject && reject()
      }
    }
  })
}