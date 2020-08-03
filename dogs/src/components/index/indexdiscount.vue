<template>
    <div>
        <div class="qiang">
			<img src="../../assets/img/img9.png" style="width: 100%;">
		</div>
		<ul class="ul">
			<li>特惠抢购</li>
			<li>
				<img src="../../assets/img/img10.png" style="width: 1.125rem;vertical-align: middle;">
				柯基专卖&nbsp;特价柯基&yen;999,快来抢购哦
			</li>
			<li style="float: right;">
				<span style="font-size: 0.625rem;">更多</span>
				<svg class="icon " aria-hidden="true" style="font-size: 0.75rem;">
					<use xlink:href="#icon-iconfontjiantou5"></use>
				</svg>
			</li>
		</ul>
		<ul class="mui-table-view mui-grid-view">
			<li class="mui-table-view-cell mui-col-sm-4 mui-col-xs-12">
				<img src="../../assets/img/keji.png" width="100%">
				<div class="part01">
					<span>柯基</span>
					<span>&yen;888</span>
				</div>
				<div class="part02">
					<span>辽宁&nbsp;沈阳</span>
					<span>&yen;3000</span>
				</div>
			</li>
			<li class="mui-table-view-cell mui-col-sm-4 mui-col-xs-12">
				<img src="../../assets/img/keji.png" width="100%" >
				<div class="part01">
					<span>柯基</span>
					<span>&yen;888</span>
				</div>
				<div class="part02">
					<span>辽宁&nbsp;沈阳</span>
					<span>&yen;3000</span>
				</div>
			</li>
			<li class="mui-table-view-cell mui-col-sm-4 mui-col-xs-12">
				<img src="../../assets/img/keji.png" width="100%">
				<div class="part01">
					<span>柯基</span>
					<span>&yen;888</span>
				</div>
				<div class="part02">
					<span>辽宁&nbsp;沈阳</span>
					<span>&yen;3000</span>
				</div>
			</li>
		</ul>
		<ul class="update">
				<li><img src="../../assets/img/img11.png" style="margin-top: -0.3125rem;"></li>
				<li style="font-weight: 700;">最新上架</li>
				<li>
					<svg class="icon " aria-hidden="true" style="font-size: 0.75rem;">
						<use xlink:href="#icon-iconfontjiantou5"></use>
					</svg>
				</li>

			</ul>

			<div class="swiper-container dogs">
				<div class="swiper-wrapper">

					<router-link class="swiper-slide" :to="{path:'/detail', query:{id:item.id}}"
          tag="div"  v-for="(item,index) in 	detailData" :key="index">
						<img :src="item.img" >
						<p>{{item.title}}</p>
						</router-link>

				</div>
			</div>

    </div>
</template>
<script>
import Swiper from "swiper"
import {reqdetaildata} from "@/api/index"
export default {
    data(){
		return{

          detailData:[]
		}
  },
  	async created(){
    this.	detailData=await reqdetaildata();

	},
	methods:{
		init(){
			 new Swiper ('.dogs', {
				direction: 'horizontal',
        loop: true, // 循环模式选项
        autoplay:true,
				slidesPerView : 3,
				slidesPerGroup : 3,

  })
		}
	},
	mounted(){
			this.init();
	}
}
</script>
<style scoped>
.swiper-slide {
    width: 34%;
    }
.swiper-container{
	margin: 0;
	width: 100%;
}
.swiper-slide img[data-v-7c4ec4b6]{
  height: 170px;
}
.swiper-slide{

	height: 165px;
	position: relative;

}
.swiper-slide img{
	width: 95%;
box-shadow:2px 2px 2px #888888;
}
.swiper-slide p{
	position: absolute;
	bottom: 0px;
	width: 100%;
	text-align: center;
	color: orange;
}
.icon {
			  width: 1em;
			  height: 1em;
			  vertical-align: -0.15em;
			  fill: currentColor;
			  overflow: hidden;
			}
.ul{
	list-style: none;
	padding: 0.3125rem;
	margin: 0;
	background-color: white;
	height: 1.875rem;
	padding-top: 0.5rem;
	margin-top: -0.5rem;
	padding-left: 0.9375rem;
	padding-right: 0.9375rem;
}
.ul li:nth-child(1){
	float: left;
	font-size: 0.8125rem;
	color: orangered;
	font-weight: 700;
	width: 3.75rem;
	line-height: 0.9375rem;
	height: 1rem;
	border-right: 0.0625rem solid #ccc;
}
.ul li:nth-child(2){
	float: left;
	font-size: 0.75rem;
	line-height: 0.9375rem;
	height: 1rem;
	padding-left: 0.3125rem;
}
.ul li:nth-child(3){
	margin-top: -0.3125rem;
	float: left;

}
.part01{
	display: flex;
	justify-content: space-between;
	font-size: 0.75rem;
}
.part01 span:nth-of-type(2){
	color: orangered;
}
.part02{
	display: flex;
	justify-content: space-between;
	font-size: 0.625rem;
	color: #ccc;
}
.part02 span:nth-of-type(2){
	color: #ccc;
	text-decoration: line-through;
}
.update{
	list-style: none;
	clear: both;
	padding: 0;
	padding-top: 0.5rem;
	margin: 0;
	height: 2.5rem;
	background-color: white;

}
.update{
	padding-left: 0.9375rem;
	padding-right: 0.9375rem;
}
.update li{
	float: left;
}
#update li:nth-of-type(1) img{
	width: 1.5625rem;
	margin-right: 0.625rem;
}
.update li:nth-of-type(3),#update li:nth-of-type(4){
	float: right;
	font-size: 0.625rem;
	margin-top: 0.125rem;
}
#dogs{
	touch-action: none;
}
#dogs a {
	padding: 0;
	background-color: rgb(242,242,242);
	margin-left: 0.375rem;
}
#dogs a img{
	width: 8rem;
	margin-left: 1.8rem;
	height: 8rem;
}
#dogs a .sp{
	display: block;
	margin-top: -1.25rem;
	height: 1.25rem;

}
#dogs a div{
	width: auto;
	font-size: 0.75rem;
	display: flex;
	justify-content: space-between;
	padding: 0 0.3125rem 0 1.25rem;
}
#best li img{
	width: 100%;
	height:11rem;
}
.enter{
	background-color:white;
	height: 1.875rem;
	padding-left: 42%;
	padding-top: 0.3125rem;
}
.enter span{
	font-size: 0.6875rem;
	color: orange;
}



</style>
