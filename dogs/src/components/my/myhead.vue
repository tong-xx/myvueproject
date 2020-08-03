<template>
  <div>
<header class="mui-bar mui-bar-nav" style="background-color: white;">
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		<h1 class="mui-title">标题</h1>
	</header>
	<div class="mui-content head" >
	  <ul class="mui-table-view head_ul" >
	  	<li class="mui-table-view-cell mui-media">
	  		<a href="javascript:;">
	  			<img class="mui-media-object mui-pull-left" src="../../assets/img/bixiong.jpg" >
	  			<div class="mui-media-body" style="font-weight: 700; ">
	  				tong
	  				<p class="mui-ellipsis">商城所有用品享受会员价</p>
	  			</div>
				<div class="jifen">
					<div>
						<p >0分</p>
						<p>积分</p>
					</div>
					<div>
						<p >0张</p>
						<p>优惠券</p>
					</div>
				</div>

	  		</a>
	  	</li>

	  </ul>

	    <ul class="mui-pull-leftstyul" id="ull">
	  		<li>
				<img src="../../assets/img/5 (1).png" >
				代付款
			</li>
			<li>
				<img src="../../assets/img/3（3）.png" >
				代发货
			</li>
			<li>
				<img src="../../assets/img/5 (2).png" >
				已发货
			</li>
			<li>
				<img src="../../assets/img/3 (2).png" >
				待评价
			</li>
			<li>
				<img src="../../assets/img/3 (1).png" >
				退&nbsp;&nbsp;款
			</li>
	  	</ul>
	</div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>

	 li{

		    list-style: none;
		}
	#ull{
			display: flex;
			justify-content: space-around;
			padding-left: 0px;
		}

	#ull li img{
		   width: 30px;
		   height: 25px;
		   display: block;
		   margin-left: 10px;
		}
		#ull li img:nth-child(2){
			 width: 23px;
		}
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
		.ulul li span{
			display: block;
			width: 60px;
			height: 30px;
		}
		.ulul{
			padding: 0;
			background-color: white;
		}
		.icon {
		  width: 1em;
		  height: 1em;
		  vertical-align: -0.15em;
		  fill: currentColor;
		  overflow: hidden;
		}
		.head{
		   margin-top: -15px;
		   background-color: white;
		   padding-bottom: 10px;

		}
		.head_ul li{
			height: 150px;
			padding-top: 20px;
		}
		.jifen{
			display: flex;
			justify-content: space-between;
			padding: 20px 50px;
		}
		.jifen div p:nth-child(1){
			font-weight: 700;
			font-size: 20px;
		}

</style>
