<template>
    <div class="home app-wrapper">
        <el-container>
            <el-header>
                <div>HelloWorld</div>
            </el-header>
            <el-container class="container">
                <el-aside style="width:200px">
                    <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="vertical"
                        @select="handleSelect"
                        router=""
                    >
                        <el-menu-item
                            v-for="(route) in $router.options.routes"
                            :key="route.path"
                            :index="route.path"
                        >{{route.name}}</el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import http from "../utils/request";
// import svg from "../components/svg"
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex';
import alertTip from '../components/common/alertTip';
import objectHash from 'object-hash';
// import func from '../../vue-temp/vue-editor-bridge';
export default {
    name: 'Home',
    data() {
        return {
            status: '1',
            activeIndex: '1',
            activeIndex2: '1',
            name: 'abc',
            isShow: false,
            showAlert: false, //显示提示组件
            alertText: '我出现了', //提示的内容
            countdown: 20, //倒计时
            timer: null, //
            imgUrl: require('@/assets/logo.png'),
            generateList: [
                {
                    age: 11,
                    isMarry: false,
                },
                {
                    age: 12,
                    isMarry: true,
                },
                {
                    age: 13,
                    isMarry: false,
                },
                {
                    age: 14,
                    isMarry: true,
                },
            ],
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                },
            ],
            header: [
                {
                    label: '年龄',
                    key: 'age',
                    fixed: 'left',
                },
                {
                    label: '婚否',
                    key: 'isMarry',
                },
            ],

            //自定义列
            labelHead(h, { column }) {
                return h(
                    'span',
                    { class: 'table-head', style: { width: '100%' } },
                    [column.label]
                );
            },
        };
    },
    computed: {
        ...mapState(['isLogin', 'products']),
        username: {
            get() {
                return this.$store.username;
            },
            set(val) {
                this.SAVE_USERNAME(val);
            },
        },
        reverseName() {
            return this.name.split('').reverse().join('');
        },
        ...mapGetters(['productExp']),
        tableDataWithHash() {
            return this.tableData.map((i) => ({
                ...i,
                key: objectHash(i),
            }));
        },
    },
    watch: {
        name() {
            console.log(this);
        },
    },
    components: {
        alertTip,
    },
    mounted() {
        let obj = {};

        this.count();

        let val = 'bob';
        Object.defineProperty(obj, 'name', {
            get() {
                return val;
            },
            set(newVal) {
                val = newVal;
            },
        });

        // this.hello();
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
        },
        onChangeItem(index, event) {
            console.log(index, event);
            // this.tableData[index] = {
            //   date: "2016-05-021",
            //   name: "王小虎1",
            //   address: "上海市普陀区金沙江路 1518 弄1",
            // };
            // this.$set(this.tableData, index, {
            //   date: "2016-05-021",
            //   name: "王小虎1",
            //   address: "上海市普陀区金沙江路 1518 弄1",
            // })
            this.tableData.splice(index, 1, {
                date: '2016-05-021',
                name: '王小虎1',
                address: '上海市普陀区金沙江路 1518 弄1',
            });
            // this.$forceUpdate();
        },
        beforeEnter() {},
        ...mapActions(['setIsLogin']),
        ...mapMutations(['setIsLogin', 'SAVE_USERNAME']),
        closeTip() {
            this.showAlert = false;
        },
        updateUsername(e) {
            this.SAVE_USERNAME(e.target.value);
        },
        getSafeUndefind() {
            return void 0;
        },
        //倒计时
        count() {
            let num = this.countdown - 1;
            if (num < 0) {
                return clearTimeout(this.timer);
            }
            this.countdown = num;
            this.timer = setTimeout(() => {
                this.count();
            }, 1000);
        },
    },
    start() {},
    destoryed() {
        console.log('destoryed');
    },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
}

.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-container {
    height: calc(100%);
    .el-container {
        height: calc(100% - 60px);
    }
}
.el-menu-demo {
    height: 100%;
}
</style>
