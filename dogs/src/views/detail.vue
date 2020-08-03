<template>
<div>
  <!-- 头部开始 -->
	    <div class="g-top">
				<img id="gimg" :src="one.img" >
				<span class="mui-icon mui-icon-arrowleft"></span>
		</div>
		<!-- 头部结束 -->

		<!-- 狗信息介绍开始 -->
		<div class="g-middle">
			<p>
				<span id="gtitle">{{one.title}}</span>
				<span id="ggender">{{one.gender}}</span>
				<span id="gprice">{{one.price}}</span>
			</p>
			<ul>
				<li>
					<span>生日：</span>
					<span>2020-03-25</span>
				</li>
				<li>
					<span>发布：</span>
					<span>2分钟前</span>
				</li>
				<li>
					<span>绝育：</span>
					<span>否</span>
				</li>
				<li>
					<span>品级：</span>
					<span>宠物级</span>
				</li>
				<li>
					<span>疫苗：</span>
					<span>第一针&nbsp;&nbsp;2020-04-28&nbsp;&nbsp; 英特威</span>
					<span>第二针&nbsp;&nbsp;2020-05-28&nbsp;&nbsp; 英特威</span>
					<span>第三针&nbsp;&nbsp;2020-06-28&nbsp;&nbsp; 英特威</span>
				</li>
				<li>
					<span>驱虫：</span>
					<span>第一次&nbsp;&nbsp;2020-04-28&nbsp;&nbsp; 大宠爱</span>
					<span>第二次&nbsp;&nbsp;2020-05-28&nbsp;&nbsp; 大宠爱</span>
					<span>第三次&nbsp;&nbsp;2020-06-28&nbsp;&nbsp; 大宠爱</span>
				</li>
				<li>
					<span>描述：</span>
					<span>面向全国出售各种幼犬宠物，品种齐全，品相精致</span>
				</li>


			</ul>

			<div class="peisong">
				<ul>
					<li style="width: 2.7rem;">
						<span>配送:</span>

					</li>
					<li>
						<span class="mui-icon mui-icon-paperplane"></span>
						<span>空运:</span>
						<span>600元</span>

					</li>
					<li>
						<span class="mui-icon mui-icon-location"></span>
						<span>汽运:</span>
						<span>250元</span>

					</li>
					<li>
						<span class="mui-icon mui-icon-person"></span>
						<span>自提:</span>

					</li>
				</ul>

				<ul>
					<li style="width: 2.7rem;">
						<span>服务:</span>

					</li>
					<li>
						<span class="mui-icon mui-icon-checkmarkempty"></span>
						<span>100%实拍</span>


					</li>
					<li>
						<span class="mui-icon mui-icon-checkmarkempty"></span>
						<span>平台认证</span>


					</li>
					<li>
						<span class="mui-icon mui-icon-checkmarkempty"></span>
						<span>先行赔付</span>


					</li>

				</ul>
			</div>
		</div>
		<!-- 狗信息介绍结束 -->
    <!-- 评论开始 -->
		<div class="comment_content">
			<ul class="mui-table-view mui-grid-view" >
					<li class="mui-table-view-cell mui-col-sm-2">
						<img src="../assets/img/W49)MFJC1PBV(_FP[N3F8DJ.png" style="width:3rem;">
					</li>
					<li class="mui-table-view-cell mui-col-sm-6">
						<h4>Kim</h4>
							<van-rate v-model="value" @change="onChange" />
						<p>(默认好评)通过平台担保交易买到一只哈士奇</p>
					</li>
					<li class="mui-table-view-cell mui-col-sm-4">
						2020-06-22 08:19:18
					</li>
				</ul>

				<ul class="mui-table-view mui-grid-view" >
						<li class="mui-table-view-cell mui-col-sm-2">
							<img src="../assets/img/W49)MFJC1PBV(_FP[N3F8DJ.png" style="width:3rem;">
						</li>
						<li class="mui-table-view-cell mui-col-sm-6">
							<h4>Kim</h4>
						<van-rate v-model="value2" @change="onChange2" />
							<p>(默认好评)通过平台担保交易买到一只哈士奇</p>
						</li>
						<li class="mui-table-view-cell mui-col-sm-4">
							2020-06-22 08:19:18
						</li>
					</ul>
		</div>
		<!-- 评论结束 -->

		<!-- 底部开始 -->
		<div class="foot">
			<ul class="mui-table-view mui-grid-view">
					<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3">
						<span class="mui-icon mui-icon-redo"></span>
						<span>分享</span>
					</li>
					<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3">
						<span class="mui-icon mui-icon-star"></span>
						<span>分享</span>
					</li>
					<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3">
						<span class="mui-icon mui-icon-chatboxes"></span>
						<span>分享</span>
					</li>
					<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3"
					style="padding: 0;margin: 0;background-color: orange;height: 4rem;text-align: center;line-height: 4rem;" >

						<span style="font-size: 1.25rem;" id="purse" @click="purse">购买</span>
					</li>
				</ul>
		</div>
  </div>
		<!-- 底部结束-->
</template>
<script>
import {onedetail} from "@/api/index"
export default {
    data(){
      return{
        one:[],
        value:0,
        value2:0,
      }
    },
    async created(){
		let id=this.$route.query.id;
    this.one=await onedetail(id);

  },
  methods:{
      purse(){
        //定义dogcar应该放在vuex中，这样才能将多条信息push到数组里面
        let dogcar=[];
        console.log("this.one",this.one)
        dogcar.push(this.one)
        console.log("dogcar",dogcar)
        localStorage.setItem("dogcar", JSON.stringify( dogcar))
        this.$router.push('/dogcar')
      },
      onChange(value) {

       this.$toast('满意度：' + value);
    },
     onChange2(value) {
       this.$toast('满意度：' + value);
    },
  }
}
</script>
<style  scoped>
.g-top{
	width: 100%;
	height: 25rem;
	position: relative;
}
.g-top img{
	width: 100%;
	height: 25rem;
}
.g-top span{
	display: block;
	height: 3.125rem;
	width: 3.125rem;
	background-color:#ccc;
	border: 1px solid #ccc;
	border-radius: 50%;
	text-align: center;
	line-height: 3.125rem;
	font-size: 2rem;
	color: white;
	position: absolute;
	top: 1.25rem;
	left: 1.25rem;
}
.g-middle{
	height:32rem;
	background-color: white;
}
.g-middle p{
	padding: 1.25rem;
}
.g-middle span{
	display: block;
	float: left;
}
.g-middle p span:nth-child(1){
	font-weight: 700;
	font-size: 1.3rem;
}
.g-middle p span:nth-child(2){
	width: 2.2rem;
	height: 1.6rem;
	background-color: #0062CC;
	color: white;
	font-size: 1.1rem;
	text-align: center;
	line-height: 1.6rem;
	border-radius: 0.625rem;
	margin-left: 0.625rem;
	margin-right: 0.625rem;
	margin-top: -0.2rem;
}
.g-middle p span:nth-child(3){
	float: right;
	color: red;
	margin-right: 1.875rem;
	font-size: 1.875rem;
}
.g-middle ul {
	list-style: none;
	}
.g-middle ul li{
	height: 1.875rem;
	width: 16rem;
}
.g-middle ul li span:first-child{
	color: rgba(0,0,0,0.5);
}
.g-middle ul li:nth-child(5) span:nth-child(n+2){
	display: block;
	margin-left: 2.5rem;
}
.g-middle ul li:nth-child(6) span:nth-child(n+2){
	display: block;
	margin-left: 2.5rem;
}
.g-middle ul li:nth-child(7) span:nth-child(n+2){
	display: block;
	margin-left: 2.5rem;
}
.peisong{
	/* background-color: #0086B3; */
	margin-top: 9rem;
	border-top: 0.0625rem solid #ccc;
	border-bottom: 0.0625rem solid #ccc;
	height: 3.125rem;

}
.peisong ul {
	height: 3rem;
	margin: 0;
}
.peisong ul li{
	float: left;
	width: 24%;
	height: 3rem;
	padding-top: 0.65rem;
}
.peisong ul>li:nth-child(n+2)>span:nth-child(1){
	color:white;
	background-color: orangered;

}
.peisong ul li:nth-child(n+2) span:nth-child(3){
	color: orangered;
}

.peisong ul:nth-child(2)>li:nth-child(n+2)>span:nth-child(1){
	color:white;
	background-color:orange;
	border-radius: 50%;

}
.peisong ul:nth-child(2) li span:nth-child(2){
	color: orange;
}

.comment{
	margin-top: 0.3rem;
	background-color: white;
	display: flex;
	justify-content: space-between;
	padding: 0.6rem 1.5rem 0.4rem 3rem;


}
.comment_content ul{
	border-top:1px solid #ccc;
}
.comment_content ul:nth-child(2){
	margin-bottom: 4rem;
}
.comment_content ul li:nth-of-type(2) span{
	color: orange;
}
.mui-table-view.mui-grid-view .mui-table-view-cell {
    font-size: 12px;
    display: inline-block;
    margin-right: -4px;
    padding: 10px 0 0 14px;
    text-align:left;
    vertical-align: middle;
    background: none;
}
.foot{
	background-color: white;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	padding-left: 0.9375rem;
}
.foot ul{
	height: 4rem;

}
.foot ul li span{
	display: block;
}

</style>
