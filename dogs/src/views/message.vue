<template>
  <div>
    <message-head title="消息列表"></message-head>
    <div class="mui-content">
			<ul class="mui-table-view msglist">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../assets/img/mm1.png">
						<div class="mui-media-body">
							平台通知
							<p class="mui-ellipsis">2018年修订版用户手册</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../assets/img/mm2.png">
						<div class="mui-media-body">
							求购通知
							<p class="mui-ellipsis">准备家养需要一只疫苗齐全的博美妹妹</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../assets/img/mm3.png">
						<div class="mui-media-body">
						    养宠顾问
							<p class="mui-ellipsis">宠物用品问题就问小顾问</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../assets/img/mm4.png">
						<div class="mui-media-body">
						    宠物市场官方
							<p class="mui-ellipsis">购宠售宠问题就问小助手</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
  </div>
</template>
<script>
import MessageHead from '../components/mall/mallhead'
export default {
  components:{
    MessageHead,
  }
}
</script>
<style >
.mui-content{
				margin-top: -15px;
      }
.mui-content>.mui-table-view:first-child {
    margin-top: 10px;
      }
.msglist{
  height: 100vh;
  padding-top: 50px;
}
</style>
