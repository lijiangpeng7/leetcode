import { saveAs } from "file-saver";

export default class FileSave {
  /**
   * 通过url下载
   * @param {*} url
   * @param {*} name
   */
  static downloadByUrl(url, name) {
    let last = url.substring(url.lastIndexOf("."), url.length);
    saveAs(url, `${name}${last}`);
  }

  /**
   * 通过blob下载
   * @param {*} blob
   * @param {*} name
   */
  static downloadByBlob(blob, name) {
    saveAs(blob, name);
  }
}
