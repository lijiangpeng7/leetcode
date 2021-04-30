<template>
    <div class>
        <el-button @click="onDownloadText">blob下载</el-button>
        <el-button @click="downloadUrlFile">url下载视频</el-button>
        <el-button @click="downloadUrlImg">url下载图片</el-button>
        <el-button @click="downloadOssFile">url下载OSS</el-button>
        <hr>
        <el-button @click="handleAddAttr">新增属性</el-button>
        <el-button>{{obj.name ? obj.name : '空'}}</el-button>

        <ul>
            <li
                v-for="(item,idx) in list"
                :key="idx"
            >{{item}}</li>
        </ul>
        <el-button @click="handleAddList">新增列表</el-button>

        <el-button @click="handleChangeStore">改变store</el-button>

        <p>store: {{count}}</p>

    </div>
</template>

<script>
import FileSave from '@/utils/exportFile';
import { store, mutations } from '@/store/store1';
export default {
    name: '',
    data() {
        return {
            obj: {},
            list: [1, 2, 3],
        };
    },
    computed: {
        count() {
            return store.count;
        },
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
                // 'https://whale-material.oss-cn-zhangjiakou.aliyuncs.com/material/video/efa49444e8eb4dc38d8309d7128bfa35.mp4',
                // "https://mira-1255830993.cos.ap-shanghai.myqcloud.com/whale1/104039e918c83facb2fcd42bc235dd57efa49444e8eb4dc38d8309d7128bfa35.srt",
                'https://mira-1255830993.cos.ap-shanghai.myqcloud.com/whale1/027ed0bf06671c566aa05b36cd2480f885e09b0e93964d65bb252700ec80f587.srt',
                'test'
            );
        },
        downloadUrlImg() {
            FileSave.downloadByUrl(
                'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
                'test'
            );
        },
        downloadOssFile() {
            FileSave.downloadOssFile(
                'material/video/efa49444e8eb4dc38d8309d7128bfa35.mp4',
                '0317-特快浏览器-打假视频(1).mp4'
            );
        },
        handTriggerError() {
            let a = null;
            console.log(a.length);
        },
        handleAddAttr() {
            // this.obj.name = '1';
            this.$set(this.obj, 'name', 1);
        },
        handleAddList() {
            this.list[3] = 4;
            this.$forceUpdate();
            // this.$delete(this.list, 3);
            // this.$set(this.list, 3, 4);
            // this.list.push(4);
        },
        handleChangeStore() {
            mutations.setCount(2);
        },
    },
};
</script>

<style lang="less" scoped>
</style>