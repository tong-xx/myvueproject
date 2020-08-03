<template>
  <div>
    <div class="mui-content" style="padding: 0;">
		<ul class="mui-table-view" style="margin-top: -15px;" >
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						切换身份
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						 收货地址
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						 我的收藏
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						 绑定微信
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						 购宠协议
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						 用户帮助
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						 客服热线
					</a>
				</li>
			</ul>
	</div>

	<div id="div" >
		<span class="mui-icon mui-icon-left-nav"></span>
		<span>发布</span>
	</div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
#div{
			height: 50px;
			width: 50px;
			background-color: orange;
			border-radius: 50%;
			text-align: center;
			position: fixed;
			margin-left: 40%;
			z-index: 99;
			margin-top: -20px;
		}
		#div span{
			display: block;
		}
</style>
