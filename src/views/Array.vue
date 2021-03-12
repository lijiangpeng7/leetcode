<template>
  <div>
    <div>姓名：{{name}}</div>
    <div>年龄：{{age}}</div>
    <button @click="setAge(age+1)">长</button>

    <ul>
      <li v-for="item in list" :key="item"></li>
    </ul>

    <input type="text" v-debounce="handleInput" />
    <span>{{count}}</span>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址">
        <template slot-scope="scope">
        <el-popover trigger="click" placement="bottom" width="300" :ref="scope.row.id" v-model="scope.row.visible">
          <p class="edit-name">
            <el-input
              type="text"
              placeholder="请输入内容"
              maxlength="60"
              show-word-limit
              style="width: 200px; margin-right: 10px"
              size="small"
            ></el-input>
            <!-- <el-button type="text" @click="confirmEditName(scope)">确定</el-button> -->
            <el-button type="text" @click="scope._self.$refs[scope.row.id].doClose()">取消</el-button>
          </p>
          <p slot="reference">
            {{ scope.row.name }}
            <i class="el-icon-edit"></i>
          </p>
        </el-popover>
        </template>
      </el-table-column>

    </el-table>

    <!--BFC 解决margin-->
    <p>hhh</p>
    <div class="p2">
      <p>ddddddd</p>
    </div>

    <!--BFC 两栏自适应-->
    <div class="box">
      <div class="left"></div>
      <div class="right"></div>
    </div>

    <!--BFC 清除浮动-->
    <div class="float-box">
      <div class="left"></div>
    </div>

    <ul ref="list"></ul>

    <ul>
      <li v-for="city in cityList" :key="city">{{city}}</li>
    </ul>

    <ul>
      <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
    <el-button @click="handleAppend">点击</el-button>
  </div>
</template>

<script>
import Vue from "vue";
import Test from "@/components/Test";
let store = Vue.observable({ name: "bob", age: 10 });
let mutations = {
  setAge(age) {
    store.age = age;
  },
};
export default {
  extends: Test,
  data() {
    return {
      list: [1, 2, 3],
      city: 1,
      count: 1,
      tableData: [
        {
          visible: false,
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          visible: false,
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          visible: false,
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          visible: false,
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      cityList: []
    };
  },
  computed: {
    name() {
      return store.name;
    },
    age() {
      return store.age;
    },
  },
  mounted() {
    // this.testExtends();
    // this.hello();
    // console.log(this.$refs);
    let total = this.list.reduce((acc, cur) => {
      return acc + cur;
    });
    this.sayHi();

    const shape = {
      radius: 10,
      diameter() {
        return this.radius * 2;
      },
      perimeter: () => 2 * Math.PI * this.radius,
    };

    // shape.perimeter();
    // this.createLi();
    // this.createLiFragment();
    // this.freezeCityList();
    this.Obj2Json();
  },
  
  methods: {
    handleAppend() {
      this.list.push(1);
      this.list.splice(0, this.list.length);
      this.list[0] = 'hahahah';
    },
    ...mutations,
    handleInput() {
      this.count++;
      console.log("input change");
    },
    sayHi() {
      var name = "bob";
    },
    createLi() {
      console.time('test');
      let fragment = document.createDocumentFragment();
      for(let i =0; i <10000; i++){
        var li = document.createElement('li');
        li.innerText = i;
        this.$refs.list.appendChild(li);
      }
      console.timeEnd('test');
    },
    createLiFragment() {
      console.time('test fragment');
      let fragment = document.createDocumentFragment();
      for(let i =0; i <10000; i++){
        var li = document.createElement('li');
        li.innerText = i;
        fragment.appendChild(li);
      }
      this.$refs.list.appendChild(fragment);
      console.timeEnd('test fragment');
    },
    freezeCityList() {
      let citys = ['北京', '藁城区', '石家庄'];
      this.cityList = Object.freeze(citys);
      citys[0] = '1';
    },
    Obj2Json() {
      let obj = {
        name: 'bob',
        getAge() { 
          return 11
        },
        hh: undefined,
        date: new Date(),
        friend: null
      }
      let arr = [null, undefined];
      console.log('obj',JSON.stringify(obj));
      console.log('arr',JSON.stringify(arr));
    }
  },
};
</script>

<style lang="scss" scoped>
.bod{
  display: contents;
}
p{
  margin: 10px;
  background-color: red;
}
.p2{
  overflow: hidden;
}
.box{
  .left{
    width: 100px;
    height: 100px;
    float: left;
    background-color: green;
  }
  .right{
    background-color: yellow;
    height: 200px;
    overflow: hidden;
  }
}
.float-box{
  background: red;
  overflow: hidden;
  .left{
    width: 100px;
    height: 100px;
    float: left;
    background-color: green;
  }
}
</style>