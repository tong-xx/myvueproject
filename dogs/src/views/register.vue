<template>
<div>

<el-header>
      <header class="mui-bar mui-bar-nav" id="header" style="background-color: white;">
				<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
				<h1 class="mui-title">注册</h1>
			</header>
</el-header>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm register"
  >

   <el-form-item label="手机号:" prop="tel" class="p1">
      <el-input v-model="ruleForm.tel"></el-input>
    </el-form-item>

    <el-form-item label="密码:" prop="pass" class="p1">
      <el-input
        type="password"
        v-model="ruleForm.pass"
        autocomplete="off"
      ></el-input>
    </el-form-item>


    <el-form-item>
      <el-button type="danger" @click="submitForm('ruleForm')">注册</el-button>
      <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
    </el-form-item>
    <el-form-item class="zhushi">

          点注册/
         <router-link to='/login'>登陆</router-link>
          代表同意宠物市场
          <a>《用户协议》</a>
          与 <a>《隐私政策》</a>

    </el-form-item>
  </el-form>
  </div>
</template>
<script>
import { addregister } from "../api/index";

export default {
  data() {
    var checktel = (rule, value, callback) => {
     if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          callback();
        }
    };
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
    };

    return {
      ruleForm: {
        pass: "",
        tel: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],

        tel: [{ validator: checktel, trigger: "blur" }]
      }
    };
  },

  methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async(valid) => {
          if (valid) {
            let result = await addregister(this.ruleForm);
                alert(result.msg);
           this.$router.replace("/login");
          } else {
             alert('注册失败!!');
            return false;
          }
        });
      },
      // resetForm(formName) {
      //   this.$refs[formName].resetFields();
      // }
    }
}
</script>
<style scoped>
.el-header {
    background: #fff;
}
 .register{
   background: #fff;
   height: 100vh;
   margin-left: -25px;
   padding-top: 20px;
 }
 .el-button{
width: 65vw;
 }
 .el-input {
    width: 80%;
}
.p1 {
   font-weight: 700;
    font-size: 17px;

}
.zhushi{
 margin-left: -40px;
}
</style>
