<template>
  <div class>
    <div class="card" ref="QrcodePage">
      <p>邀请你学习</p>
      <img :src="getImageUrl('logo.png')" alt />
      <q-rcode class="qr_code" :value="qrcodeUrl" v-if="qrcodeUrl" :options="{ size: 65 }"></q-rcode>
    </div>
    <div @click="createImg">生成海报</div>

    <!--动态路由 打印参数 start-->
    <div>User {{$route.params.id}}</div>
    <!--动态路由 打印参数 start-->
  </div>
</template>

<script>
import QRcode from "vue-qrcode";
import html2canvas from "html2canvas";

export default {
  name: "",
  data() {
    return {
      qrcodeUrl: "````````````````",
      headImg: "",
      qrContentImage: ""
    };
  },
  props: {},
  components: {
    QRcode
  },
  mounted() {
    // this.getBase64ByUrl(
    //   "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
    //   dataUrl => {
    //     console.log(dataUrl);
    //   }
    // );
  },
  methods: {

    getImageUrl(taskImg) {
      return require("@/assets/images/" + taskImg);
    },

    createImg() {
      var that = this;
      let shareContent = this.$refs.QrcodePage, //需要截图的包裹的（原生的）DOM 对象
        width = shareContent.clientWidth, //shareContent.offsetWidth; //获取dom 宽度
        height = shareContent.clientHeight, //shareContent.offsetHeight; //获取dom 高度
        canvas = document.createElement("canvas"), //创建一个canvas节点
        scale = 1; //定义任意放大倍数 支持小数

      canvas.width = width * scale; //定义canvas 宽度 * 缩放
      canvas.height = height * scale; //定义canvas高度 *缩放
      canvas.style.width = (shareContent.clientWidth * scale) / 100 + "rem";
      canvas.style.height = (shareContent.clientHeight * scale) / 100 + "rem";
      canvas.getContext("2d").scale(scale, scale); //获取context,设置scale
      let opts = {
        scale: scale, // 添加的scale 参数
        canvas: canvas, //自定义 canvas
        logging: false, //日志开关，便于查看html2canvas的内部执行流程
        width: width, //dom 原始宽度
        height: height,
        useCORS: true //（图片跨域相关）
        // allowTaint: false //允许跨域（图片跨域相关）
      };
      html2canvas(shareContent, opts)
        .then(function(canvas) {
          that.qrContentImage = canvas.toDataURL("image/jpeg", 1.0);
        })
        .catch(function(reason) {
          alert(reason);
        });
    },

    //有跨域的问题
    getBase64Image(img) {
      var image = new Image();
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      image.crossOrigin = "anonymous"; //解决Canvas.toDataURL 图片跨域问题

      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height);
        var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
        // this.headImg = url;
        console.log(url);
      };

      image.src = img;
    },

    getBase64ByUrl(src, callback, outputFormat) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", src, true);

      xhr.responseType = "arraybuffer";

      xhr.onload = function() {
        if (xhr.status == 200) {
          var uInt8Array = new Uint8Array(xhr.response);
          var i = uInt8Array.length;
          var binaryString = new Array(i);
          while (i--) {
            binaryString[i] = String.fromCharCode(uInt8Array[i]);
          }
          var data = binaryString.join("");
          var base64 = window.btoa(data);
          var dataUrl =
            "data:" + (outputFormat || "image/png") + ";base64," + base64;
          alert(dataUrl);
          callback.call(this, dataUrl);
        }
      };

      xhr.send();
    }
  }
};
</script>

<style lang="less" scoped>
</style>