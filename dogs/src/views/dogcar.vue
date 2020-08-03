<template>
  <div >
    <!-- 头部开始 -->
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">填写订单</h1>
		</header>
    <form class="mui-input-group message">
        <div class="mui-input-row">
            <label>收货人</label>
        <input type="text" class="mui-input-clear" placeholder="请填写买家姓名">
        </div>
        <div class="mui-input-row">
            <label>收货地址</label>
            <input type="password" class="mui-input-password" placeholder="请填写买家地址">
        </div>
    </form>
		<!-- 头部结束 -->

		<!-- 购物车开始 -->
		<div class="shopcar">
			<ul class="mui-table-view msg" >

        	<li class="mui-table-view-cell mui-media">

            <a href="javascript:;">
              <input type="checkbox" class=" mui-pull-left checkone" v-model="checked" @click="checkone"/>
              <img class="mui-media-object mui-pull-left" :src="data.img">
                <div class="mui-media-body">
                  {{data.title}}
                    <p class="mui-ellipsis">
                      <span class="price">&yen;{{data.price}}</span>
                      <span @click="jian">-</span>
                      <span >{{num}}</span>
                      <span @click="jia" >+</span>
                    </p>
                </div>
            </a>
				 </li>
			</ul>

		</div>
		<!-- 购物车结束 -->
<ul class="mui-table-view maijia" >
    <li class="mui-table-view-cell">卖家名称&nbsp;&nbsp;&nbsp;&nbsp; 顶尖宠物旗舰店</li>
    <li class="mui-table-view-cell">卖家地址&nbsp;&nbsp;&nbsp;&nbsp; 川师大成龙校区现代花园</li>

</ul>
<div class="fahuo">
    <p>请选择发货方式</p>
</div>
<ul class="mui-table-view fahuodetail" >
    <li class="mui-table-view-cell mui-media" v-for="(item,index) in choose" :key="index">
        <a href="javascript:;">
	        <span :class="item.icon"></span>

              {{item.name}}	<span style="color:orange;margin-left:15px" >{{item.price}}元</span>
               <input  type="radio" class="mui-pull-right"
                v-model="item.flag" @click="choosehandle(index)"/>

                <!-- 因为computed和choosehandle(index)之间的逻辑关系，和以往不同，所以添加一个隐藏域 -->
                <input type="hidden" v-model="val">

        </a>
    </li>

</ul>
		<!-- 结算开始 -->
		<div class="mui-content jiesuan" >
			<ul class="mui-table-view mui-grid-view">
					<li class="mui-table-view-cell mui-col-sm-6">
						<span >合计</span>
						<span id="pay">{{gettotal}}</span>
					</li>
					<li class="mui-table-view-cell mui-col-sm-6">
						<span id="buybtn">去结算</span>
					</li>

				</ul>
		</div>
		<!-- 结算结束 -->
  </div>
</template>
<script>
export default {
    data(){
      return{
        data:[],
        num:1,
        total:0,
        checked:false,
        val:0,
        choose:[
          {id:1,icon:"mui-icon mui-icon-person",name:"自提",price:"0",flag:"false"},
           {id:2,icon:"mui-icon mui-icon-location",name:"汽运",price:"300",flag:"false"},
            {id:3,icon:"mui-icon mui-icon-paperplane",name:"空运",price:"700",flag:"false"},
        ]
      }
    },
    created(){
    let list= JSON.parse(localStorage.getItem("dogcar")) ;
    console.log("list",list[0])
    this.data=list[0];
    console.log("data", this.data)
    },
    methods:{
      jia(){
        this.num++;
      },
      jian(){
        this.num--;
      },
      checkone(){
        this.checked=!this.checked;
      },
      choosehandle(index){
        for(let i=0;i<this.choose.length;i++){

           if(index==i){
                this.choose[i].flag=true;
                  this.val=i;
           }else{
              this.choose[i].flag=false;
           }

        }
      }

    },
    	computed:{
				gettotal(){

               	if(this.checked){
                     this.total=parseInt( this.num) * parseInt(this.data.price);
                     this.total+=parseInt(  this.choose[this.val].price);
                }else{
                  this.total=0
           }
            return this.total
				}
			}
}
</script>
<style scoped>
.mui-bar-nav~.mui-content {
    padding-top: 0px;
}
.fahuodetail li{
  padding-right: 30px;
}
.fahuodetail li a .mui-icon{
  background-color:rgb(254,125,0);
}
.mui-icon-location,.mui-icon-person,.mui-icon-paperplane{
  color: #fff;
}
.fahuo{
  height: 45px;
  line-height: 45px;
  padding-left: 30px;
}
.maijia{
  margin-top: 10px;
 color: rgb(162,162,162);
font-size: 14px;
}
.msg{
  height: 100px;
  padding-top: 20px;
}
.message{
  padding-top: 50px;
  background-color: rgb(254,250,233);

}
.message div{
 height: 50px;
 padding-top: 5px;
}
.mui-bar {
	background-color: white;
	}
	.shopcar{
		margin-top: 1rem;
    height: 100px;
	}

.mui-media-object{
	margin-left: 3.125rem;
}

input[type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
	margin-top: 0.625rem;
}
.mui-ellipsis{
	color: red;
	}

.mui-media-body span:nth-child(n+2){
	color: #000000;
	float: right;
	font-size: 1.25rem;
	width: 1.25rem;
	margin-left: 0.9375rem;



}
.jiesuan{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;

}
.jiesuan ul{
	height: 3.25rem;

}
.jiesuan ul li:nth-of-type(1) span:nth-of-type(2){
	color: orangered;
}
.jiesuan ul li:nth-of-type(2) span{
	background: #ccc;
	display: inline-block;
	width: 6.25rem;
	height: 1.75rem;
	border-radius: 0.9375rem;
	text-align: center;
	line-height: 1.75rem;
}
</style>
