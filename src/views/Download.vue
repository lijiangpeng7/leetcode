<template>
    <div class>
        <el-button @click="onDownloadText">blob下载</el-button>
        <el-button @click="downloadUrlFile">url下载视频</el-button>
        <el-button @click="downloadUrlImg">url下载图片</el-button>
    </div>
</template>

<script>
import FileSave from '@/utils/exportFile';
export default {
    name: '',
    data() {
        return {};
    },
    props: {},
    components: {},
    mounted() {},
    methods: {
        onDownloadText() {
            var blob = new Blob(['Hello, world!'], {
                type: 'text/plain;charset=utf-8',
            });
            FileSave.downloadByBlob(blob, 'test.txt');
        },
        downloadUrlFile() {
            FileSave.downloadByUrl(
                // 'https://mira-1255830993.cos.ap-shanghai.myqcloud.com/whale1/concat/a349fc64f6069b4a98f18087cefcf1c8df876aa7866d4da68fba05879a69845a_cut_1%E5%AF%B91_0_x_a349fc64f6069b4a98f18087cefcf1c8df876aa7866d4da68fba05879a69845a_cut_1%E5%AF%B91_1.mp4',
                'https://whale-material.oss-cn-zhangjiakou.aliyuncs.com/material/video/efa49444e8eb4dc38d8309d7128bfa35.mp4',
                'test'
            );
        },
        downloadUrlImg() {
            FileSave.downloadByUrl(
                'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
                'test'
            );
        },
    },
};
</script>

<style lang="less" scoped>
</style>