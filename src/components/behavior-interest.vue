<template>
  <div>
    <el-cascader-panel
      ref="cascader"
      :key="menuKey"
      v-model="cascaderData"
      :options="originData"
      @change="renderSelectData"
      :clearable="true"
      :props="{ multiple: true, value: 'id', label: 'name' }"
    ></el-cascader-panel>
    <ul>
      <li v-for="(item) in rightCheckedData" :key="item.value">
        {{item.label}}{{item.value}}
        <el-button @click="handleDelete(item)">删除</el-button>
      </li>
    </ul>

    <el-button>提交</el-button>
  </div>
</template>

<script>
import { behaviorInterest } from "@/utils/mock";
export default {
  data() {
    return {
      cascaderData: [],
      originData: [],
      rightCheckedData: [],
      menuKey: 1,
      behaviorLabel: ["1-101-10103", "1-104-10401"],
    };
  },
  mounted() {
    let result = behaviorInterest.rtnData;
    let tempData = result.behavior_interest.behavior;
    this.formatData(tempData);
    this.originData = tempData;
    console.log(this.originData);
    this.timeStamp = new Date();
  },
  methods: {
    //data为需要修改的tree，这里主要是为antd design 里面select规范数据
    ass(data) {
      let item = [];
      data.map((list, i) => {
        let newData = {};
        newData.key = list.id;
        newData.value = list.id;
        newData.title = list.name;
        newData.children = list.children ? ass(children) : []; //如果还有子集，就再次调用自己
        item.push(newData);
      });
      return item;
    },
    handleDelete(item) {
      let levelIdx = item.level - 1;
      //删除组件的数据
      for (let i = this.cascaderData.length - 1; i >= 0; i--) {
        if (item.value == this.cascaderData[i][levelIdx]) {
          this.cascaderData.splice(i, 1);
        }
      }
      //删除选中的数据
      let findIdx = this.rightCheckedData.findIndex(
        (entry) => entry.value == item.value
      );
      this.rightCheckedData.splice(findIdx, 1);
      ++this.menuKey; //强制刷新组件
    },
    renderSelectData() {
      let tempArr = Array.from(this.$refs.cascader.getCheckedNodes()),
        selfData = [[], [], []];
      tempArr.forEach((item) => {
        let idx = item.level - 1;
        selfData[idx].push(item);
      });
      //处理二级数据
      selfData[1].forEach((item) => {
        selfData[2] = selfData[2].filter(
          (entry) => item.value != entry.parent.value
        );
      });
      //处理一级数据
      selfData[0].forEach((item) => {
        selfData[1] = selfData[1].filter(
          (entry) => item.value != entry.parent.value
        );
      });
      this.rightCheckedData.splice(0, this.rightCheckedData.length);
      let rightData = Array.from([
        ...selfData[0],
        ...selfData[1],
        ...selfData[2],
      ]);
      console.log(rightData);
      rightData.forEach((item) => {
        this.rightCheckedData.push({
          value: item.value,
          path: item.path,
          label: item.label,
          level: item.level,
        });
      });
    },
    formatData(arr) {
      arr.forEach((item) => {
        if (item.children && item.children.length > 0) {
          item.children.forEach((item1) => {
            if (item1.children && item1.children.length > 0) {
              item1.children.forEach((item2) => {
                delete item2.children;
              });
            } else {
              delete item1.children;
            }
          });
        } else {
          delete item.children;
        }
      });
    },
    getCheckedDataById(children, arrId) {
      let id = arrId.shift();
      let findIdx = children.findIndex((entry) => entry.id === parseInt(id));
      if (arrId.length > 0) {
        return this.getCheckedDataById(children[findIdx].children, arrId);
      } else {
        return children[findIdx];
      }
    },
    getCheckedDataByParent(option) {
      let checkedData = [];
      let parent = option.children;
      //如果当前点击的，处于全选的状态
      let parIdx = this.rightCheckedData.findIndex(
        (entry) => entry.id === option.id
      );
      if (parIdx !== -1) {
        checkedData = parent;
      } else {
        parent.filter((item) => {
          let findIdx = this.rightCheckedData.findIndex(
            (entry) => entry.id === item.id
          );
          if (findIdx !== -1) checkedData.push(item);
        });
      }
      return checkedData;
    },
  },
};
</script>

<style scoped lang="scss">
.behavior-interst {
  display: flex;
  margin-top: 12px;
  margin-left: 20px;
  .behavior-left {
    width: 570px;
    height: 268px;
    border: 1px solid #e0e2e9;
    /deep/ .el-tabs__nav-wrap {
      padding-left: 20px;
    }
    .behavior-container {
      height: 195px;
      border: 1px solid #e0e2e9;
      margin: 0 16px 16px;
      white-space: nowrap;
      box-sizing: border-box;
      overflow: hidden;
      .list {
        width: 358px;
        height: 195px;
        display: inline-block;
        overflow-y: scroll;
        overflow-x: hidden;
        box-sizing: border-box;
        border-right: 1px solid #e0e2e9;
        &::-webkit-scrollbar {
          display: none;
        }
        /deep/ .el-checkbox {
          margin-right: 0;
          padding: 0 10px;
          .el-checkbox__label {
            width: calc(100% - 24px);
          }
          &.active {
            background: rgba(0, 117, 255, 0.1);
          }
          &:hover {
            background-color: rgba(0, 117, 255, 0.1);
          }
        }
        .item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          height: 40px;
          line-height: 40px;
          .arrow {
            font-size: 12px;
          }
        }
      }
      .listHalf {
        width: 179px;
      }
    }
    .keword-container {
      height: 195px;
      margin: 0 16px 16px;
      white-space: nowrap;
      .list {
        border: 1px solid #e0e2e9;
        max-height: 180px;
        overflow-y: scroll;
        .item {
          padding: 5px 10px;
          position: relative;
          &:hover {
            background-color: rgb(247, 247, 247);
          }
          .check {
            position: absolute;
            right: 16px;
            top: 16px;
            display: none;
          }
          &.select {
            background-color: rgb(247, 247, 247);
            .check {
              display: block;
            }
          }
          .name {
            line-height: 20px;
          }
          .people-num {
            font-size: 12px;
            color: #9b9b9b;
            line-height: 18px;
          }
        }
      }
      .tips {
        font-size: 14px;
        height: 173px;
        width: 100%;
        overflow: auto;
        white-space: normal;
        line-height: 2;
        color: rgb(116, 122, 140);
        span {
          color: rgb(38, 38, 38);
        }
      }
    }
  }
  .behavior-right {
    display: inline-block;
    border: 1px solid #e6e6e6;
    width: 280px;
    margin-left: 16px;
    height: 268px;
    overflow: hidden;
    .behavior-count {
      padding: 0 8px;
      line-height: 32px;
      .num {
        color: rgb(0, 117, 255);
      }
      .clear-btn {
        color: rgb(0, 117, 255);
        cursor: pointer;
        margin-left: 20px;
      }
    }
    .ci-num {
      padding: 0 8px;
      font-size: 13px;
      line-height: 16px;
      color: rgba(0, 0, 0, 0.45);
      span {
        &:nth-child(2) {
          margin-left: 10px;
        }
      }
    }
    .title {
      color: black;
      background: #e6e6e6;
      line-height: 28px;
      margin-top: 5px;
      padding: 0 8px;
      span {
        &:nth-child(1) {
          width: 148px;
          display: inline-block;
        }
      }
    }
    .list {
      padding: 0 8px;
      height: 185px;
      overflow-y: scroll;
      .item {
        line-height: 28px;
        .name {
          width: 148px;
          display: inline-block;
        }
        .people-num {
          width: 70px;
          display: inline-block;
        }
        .del-btn {
          color: rgb(0, 117, 255);
          cursor: pointer;
        }
      }
    }
  }
}
</style>