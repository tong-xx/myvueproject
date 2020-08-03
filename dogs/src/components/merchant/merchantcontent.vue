<template>
  <div>
       <div class="huoyue">
	  	活跃商家
	  </div>

	  <ul class="mui-table-view mui-grid-view mui-col-sm-3 mui-col-xs-3" id="huoyue">
	  		<li class="mui-table-view-cell">
	  			<img src="../../assets/img/huoyue1.png" >
				<p>喵喵汪汪</p>
	  		</li>
	  		<li class="mui-table-view-cell">
	  			<img src="../../assets/img/huoyue2.png" >
	  			<p>喵喵汪汪</p>
	  		</li>
	  		<li class="mui-table-view-cell">
	  			<img src="../../assets/img/W49)MFJC1PBV(_FP[N3F8DJ.png" >
	  			<p>喵喵汪汪</p>
	  		</li>
			<li class="mui-table-view-cell">
				<img src="../../assets/img/W49)MFJC1PBV(_FP[N3F8DJ.png" >
				<p>喵喵汪汪</p>
			</li>
	  	</ul>
	 <ul class="mui-table-view" style="margin-top: 2px;">
	 		<li class="mui-table-view-cell" style="font-size: 12px;color: #ccc;padding: 0;height: 30px;line-height: 30px;">
	 		&nbsp; &nbsp;信用优选商家
	 		</li>
	 		<li class="mui-table-view-cell" style="padding: 0;">
	 			<ul class="sj" style="padding: 0;margin: 0;">
	 				<li >
						<img src="../../assets/img/ke2 (1).png" >
					</li>
					<li>
						<p >汪先生犬舍<span class="p1" style="color: white;">已交押金</span></p>
						<p>江苏淮安楚州区</p>
						<p>在售42只 担保交易<span>260</span>只</p>
					</li>
					<li>
						<p>
							<img src="../../assets/img/star.png" >
						</p>
						<p style="color: red;">193</p>
						<p>好评数</p>
					</li>
	 			</ul>

	 		</li>
	 		<li class="mui-table-view-cell ">
				<ul class="mui-table-view mui-grid-view alsj">
						<li class="mui-table-view-cell mui-col-sm-4 mui-col-xs-4">
							 <img src="../../assets/img/alsj2.png" >
							<p>
								<span>阿拉斯加</span>
								<span>&yen;1800</span>
							</p>
						</li>
						<li class="mui-table-view-cell mui-col-sm-4 mui-col-xs-4">

							  <img src="../../assets/img/alasijia.png" >
						      <p>
						      	<span>阿拉斯加</span>
						      	<span>&yen;1800</span>
						      </p>
						</li>
						<li class="mui-table-view-cell mui-col-sm-4 mui-col-xs-4">
							     <img src="../../assets/img/alsj1.png" >
							     <p>
							     	<span>阿拉斯加</span>
							     	<span>&yen;1800</span>
							     </p>
						</li>
					</ul>

	 		</li>

			<li class="mui-table-view-cell" style="padding: 0;">
				<ul class="sj" style="padding: 0;margin: 0;">
					<li >
						<img src="../../assets/img/ke2 (1).png" >
					</li>
					<li>
						<p >汪先生犬舍<span class="p1" style="color: white;">已交押金</span></p>
						<p>江苏淮安楚州区</p>
						<p>在售42只 担保交易<span>260</span>只</p>
					</li>
					<li>
						<p>
							<img src="../../assets/img/star.png" >
						</p>
						<p style="color: red;">193</p>
						<p>好评数</p>
					</li>
				</ul>

			</li>

			<li class="mui-table-view-cell ">
				<ul class="mui-table-view mui-grid-view alsj">
						<li class="mui-table-view-cell mui-col-sm-4 mui-col-xs-4">
							 <img src="../../assets/img/yingduan.png" >
							<p>
								<span>英短毛猫</span>
								<span>&yen;1800</span>
							</p>
						</li>
						<li class="mui-table-view-cell mui-col-sm-4 mui-col-xs-4">

							  <img src="../../assets/img/alasijia.png" >
						      <p>
						      	<span>阿拉斯加</span>
						      	<span>&yen;1800</span>
						      </p>
						</li>
						<li class="mui-table-view-cell mui-col-sm-4 mui-col-xs-4">
							     <img src="../../assets/img/keji.png" >
							     <p>
							     	<span>柯基</span>
							     	<span>&yen;1800</span>
							     </p>
						</li>
					</ul>
			</li>
	 	</ul>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>

			.list li{
				width: 33%;
				float: left;
				background-color: white;
				padding-left: 20px;

			}
			.list li a{
				font-size: 10px;
			}
			.mui-table-view-cell.mui-active {
			    background-color: white;
			}
			.huoyue{
				background-color: white;
           padding-left:10px ;
				color: #ccc;
				font-size: 11px;
				height: 30px;
				line-height: 30px;

			}
		#head{
			padding: 0;
		}
		#huoyue li{
			margin-left: 20px;
		}
		#huoyue li img{
			width: 60px;
			height: 60px;
		}
		ul{
			list-style: none;
		}
		.sj li {
			float: left;

		}
		.sj li:last-child{
			float: right;

		}
		.sj li img {
			padding-top: 5px;
			margin-right: 10px;
			width: 50px;

		}
		.sj li p{
			font-size: 11px;
			height: 20px;

		}
		.sj li p span{
			color: red;
		}
		.p1{

			background-color: goldenrod;
			margin-left: 10px;
		}
		.mui-table-view:after{height:0 ;}
		.mui-table-view::before{height: 0;}
		.alsj li img{
			width: 100px;
			height: 110px;
		}
		.alsj li p{
			padding-top:10px ;
		}
		.alsj li p span:nth-of-type(2){
			color: red;
		}
</style>
