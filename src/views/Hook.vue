<template>
    <div>
        <testProps
            :age1="111"
            :originalData="formData"
            :list="list"
            greeting-text="hi"
            @visibleChange="doSomething"
            v-model="lovingVue"
            :title.sync="doc"
        >
            <div>hello</div>
        </testProps>
        <input
            type="text"
            @focus="isShow = true"
        >
        <div v-copy="handelSuccess">11111111111</div>

    </div>
</template>

<script>
import copy from '@/directives/copy/copy';
import MiniPlayer from '@/components/mini-player';
import testProps from '@/components/testProps';
export default {
    directives: {
        copy,
    },
    components: { testProps, MiniPlayer },
    data() {
        return {
            isShow: false,
            timer: null,
            tableData: [],
            formData: {
                area: '1',
                range: '2',
            },
            list: [1, 2, 3],
            lovingVue: '',
            doc: {
                title: '近今',
            },
        };
    },
    methods: {
        handelSuccess() {
            console.log('拷贝成功');
        },
        onClickOutside() {
            console.log('hhhhh');
            this.isShow = false;
        },
        fn() {
            let timer = setInterval(() => {
                console.log(222222221);
            }, 1000);
            this.$once('hook:beforeDestroy', () => {
                console.log('执行');
                clearInterval(timer);
                timer = null;
            });
        },
        doSomething() {
            console.log('监听到了');
        },
    },
};
</script>

<style>
</style>