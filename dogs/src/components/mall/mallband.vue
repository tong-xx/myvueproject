<template>
  <div class="mui-content band">
			<ul>
				<li>品牌</li>
				<li>查看所有品牌
				<svg class="icon font1" aria-hidden="true" style="font-size: 12px; color: #000;" >
					<use xlink:href="#icon-iconfontjiantou5"></use>
				</svg>
				</li>
			</ul>
			<ul class="mui-table-view mui-grid-view" id="band">
					<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3">
						<img src="../../assets/img/d1.png" >
						<p>皇家</p>
					</li>
					<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3">
						<img src="../../assets/img/d2 .png" >
						<p>冠能</p>
					</li>
					<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3">
						<img src="../../assets/img/d4 .png" >
						<p>伯纳天纯</p>
					</li>
					<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3">
						<img src="../../assets/img/d8.png" >
						<p>forpet</p>
					</li>
					<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3">
						<img src="../../assets/img/d7.png" >
						<p>巅峰</p>
					</li>
					<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3">
						<img src="../../assets/img/d6.png" >
						<p>渴望</p>
					</li>
					<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3">
						<img src="../../assets/img/d5.png" >
						<p>GO</p>
					</li>
					<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3">
						<img src="../../assets/img/d.png" >
						<p>纽顿</p>
					</li>
				</ul>

				<ul>
					<li>主粮</li>
					<li>查看所有品牌
					<svg class="icon font1" aria-hidden="true" style="font-size: 12px; color: #000;" >
						<use xlink:href="#icon-iconfontjiantou5"></use>
					</svg>
					</li>
				</ul>
				<ul class="mui-table-view mui-grid-view" id="mainfood">
						<li class="mui-table-view-cell mui-col-sm-6 mui-col-xs-6">
							<img src="../../assets/img/k1.png" >
							<p>皇家 室内成猫粮I27 2kg*2袋</p>
							<p>去毛球配方 减少便便异味</p>
							<p>
								<span>&yen;168</span>
								<span>会员价</span>
								<span>&yen;328</span>
							</p>

						</li>
						<li class="mui-table-view-cell mui-col-sm-6 mui-col-xs-6">
							<img src="../../assets/img/k2.png" >
							<p >巴西淘淘 中大型犬成犬粮</p>
							<p>巴西进口 爱犬的推荐选择</p>
							<p>
								<span>&yen;168</span>
								<span>会员价</span>
								<span>&yen;328</span>
							</p>
						</li>
						<li class="mui-table-view-cell mui-col-sm-6 mui-col-xs-6">
							<img src="../../assets/img/k3.png" >
							<p> 巴西淘淘 中大型犬成犬粮</p>
							<p>去毛球配方 减少便便异味</p>
							<p>
								<span>&yen;168</span>
								<span>会员价</span>
								<span>&yen;328</span>
							</p>
						</li>
						<li class="mui-table-view-cell mui-col-sm-6 mui-col-xs-6">
							<img src="../../assets/img/k4.png" >
							<p>伯纳天纯中大型幼犬粮2kg</p>
							<p>天然无谷低敏配方</p>
							<p>
								<span>&yen;168</span>
								<span>会员价</span>
								<span>&yen;328</span>
							</p>
						</li>
					</ul>
		</div>
</template>
<script>
export default {

}
</script>
<style >
.icon {
			  width: 1em;
			  height: 1em;
			  vertical-align: -0.15em;
			  fill: currentColor;
			  overflow: hidden;
			}
.band ul{
	display: flex;
	justify-content: space-between;
	margin: 0;
	height: 40px;
	background-color: white;
}
ul{
 list-style: none;
}
.band ul li{
	line-height: 40px;
}
.band ul li:nth-child(2){
	font-size: 13px;
	color: red;

}
#band{
	background-color:white;
	height: 250px;
}
#band li img{
	width: 60px;
	height: 60px;
}
#mainfood {
    padding: 0;
    height: 800px;
    background-color: white;
}
#mainfood li img{
	width: 100%;
}
#mainfood li p:nth-of-type(1){
	color: #000000;
	height: 35px;
}
#mainfood li p:nth-of-type(2){
	font-size: 12px;
	height: 20px;
}
#mainfood li p:nth-of-type(3) span:nth-child(1){
	color: red;
}
#mainfood li p:nth-of-type(3) span:nth-child(2){
	color: red;
	border: 1px solid red;
	font-size: 11px;
}
#mainfood li p:nth-of-type(3) span:nth-child(3){
	margin-left: 30px;
}
.band ul li:nth-child(2) {
    font-size: 13px;
    color: red;
    margin-right: 20px;
}
.mui-bar-nav~.mui-content {
    padding-top: 0px;
}
</style>
