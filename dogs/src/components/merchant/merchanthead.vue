<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-select v-model="value1" multiple placeholder="地区">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light">
          <el-select
            v-model="value2"
            multiple
            collapse-tags
            placeholder="资质"
          >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-select
            v-model="value3"
            multiple
            collapse-tags
            placeholder="信誉"
          >
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options1: [
        {
          value: "选项1",
          label: "江苏"
        },
        {
          value: "选项2",
          label: "安徽"
        },
        {
          value: "选项3",
          label: "上海"
        },
        {
          value: "选项4",
          label: "北京"
        }
      ],
       options2: [
        {
          value: "选项1",
          label: "不限"
        },
        {
          value: "选项2",
          label: "商家认证"
        },
        {
          value: "选项3",
          label: "平台认证"
        },
        {
          value: "选项4",
          label: "实名认证"
        }
      ],
       options3: [
        {
          value: "选项1",
          label: "不限"
        },
        {
          value: "选项2",
          label: "交易量"
        },
        {
          value: "选项3",
          label: "好评数"
        }
      ],
      value1: [],
      value2: [],
      value3: []
    };
  }
};
</script>

<style >
 /* 有scoped就不能改样式，渗透>>>怎么使用 */
.el-input__icon {
    height: 100%;
    }
      .el-row {
    margin-bottom: 20px;

  }
  .el-row {
    margin-bottom: 0px;
}
   .el-row :last-child {
      margin-bottom: 0;
    }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  input[type=text]{
    margin-bottom: 0;
  }
</style>
