<template>
  <form >
			<header class="mui-bar mui-bar-nav" id="header">
				<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
				<h1 class="mui-title">登录</h1>
			</header>
			<div class="mui-content" id="content">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						手机：<input type="text" placeholder="请输入手机号码" id="username"
            name="username" v-model="tel"/>
					</li>
					<li class="mui-table-view-cell">
						密码：<input type="text" placeholder="请输入密码" id="password"
             name="password" v-model="pass"/>

					</li>
				</ul>

			</div>
			<div class="mui-content" style="background-color: white;margin-top: -40px;height: 540px;">
				<div id="mima">
					<span>用账号密码登录</span>
					<span>忘记密码</span>
				</div>

				<div style="padding: 0 10px;">
					<button type="button" class="mui-btn mui-btn-blue mui-btn-block" style="height: 50px;" @click="denglu">登录</button>
				</div>
				<div style="padding-left:20px ;">
					<p style="font-size: 13px;font-weight: 600;">点
            <router-link to='/register'>注册</router-link>/登录代表同意宠物市场<a>《用户协议》</a>与<a>《隐私政策》</a></p>
				</div>
				<div id="other">
					<span>其他登录方式</span>
				</div>
				<div class="img">
					<img src="../assets/img/weixin.png">
					<img src="../assets/img/qq.png">
					<img src="../assets/img/zhigubao.png">
				</div>
			</div>
		</form>
</template>
<script>
import {reqlogin} from '../api/index'
export default {
  data(){
    return{
        tel:"",
        pass:"",
    }
  },
methods:{
   async denglu(){
        let user=[
            {
              tel:this.tel,
              pass:this.pass
            }
        ]
         let result = await reqlogin( user);
         console.log("result ",result)
      localStorage.setItem("dogs",JSON.stringify( result))
      this.$router.push("/");
    }
  }
}
</script>
<style  scoped>
#header{
	background-color: white;
}
#content{
	margin-top: -15px;
}
#content ul li{
	height: 50px;
	position: relative;

}
#mima span[data-v-7589b93f] {
    margin-right: 20px;
}
#content ul li input{
	width: 70%;
	height: 35px;
	border: none;
	padding: 0;
	margin: 0;
}
input::placeholder{
	font-size: 14px;
	color: #ccc;

}
#content ul li span{
	font-size: 10px;
	display: block;
	position: absolute;
	top: 17px;
	right: 10px;
	background-color: #BBBBBB;
	width: 65px;
	line-height: 25px;
	border-radius: 10px;
	text-align: center;
	color: white;
}
#mima{
	display: flex;
	justify-content: space-between;
	padding: 15px 10px;
	padding-bottom: 40px;
}
#mima span{
	display: block;
	font-size: 14px;
	color: orange;
	font-weight: 550;

}
#other{
	position: relative;
	width: 70%;
	height: 1px;
	background-color: #000000;
	margin-top: 200px;
	margin-left: 14%;

}
#other span{
	display: block;
	background-color: white;
	position: absolute;
	top: -11px;
	left: 40%;
	font-size: 13px;
	font-weight: 700;
	color:#717172 ;

}
.img{
	margin-left: 27%;
	margin-top: 30px;
}
.img img{
	width: 40px;
	height: 40px;
	margin-left: 15px;
	border-radius: 20px;
}

</style>
