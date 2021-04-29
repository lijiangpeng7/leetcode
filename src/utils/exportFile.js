import { saveAs } from "file-saver";
import OSS from "ali-oss";
import { last } from "lodash";

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

  /**
   * 下载oss文件
   * @param {*} url
   * @param {*} name
   */
  static downloadOssFile(url, name) {
    let client = new OSS({
      region: "**",
      accessKeyId: "**",
      accessKeySecret: "**",
      bucket: "**",
    });
    const response = {
      "content-disposition": `attachment; filename=${encodeURIComponent(name)}`,
    };
    const downUrl = client.signatureUrl(url, {
      response,
    });
    let suffix = url.substring(url.lastIndexOf("."), url.length);
    saveAs(downUrl, `${name}${suffix}`);
  }
}
