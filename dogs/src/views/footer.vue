<template>
    <div class='g-footer'>

			<router-link :to='item.alink' :class="{'active':idx==index}"
      v-for="(item,index) in list" :key="index" >

        <span :class='item.icon'></span>
				<span @click="handle(index)">{{item.name}}</span>
			</router-link>

		</div>

</template>
<script>
export default {
    data(){
        return{
          idx:0,
          list:[
            {id:1,icon:"iconfont icon-shouye",name:"首页",alink:"/"},
             {id:2,icon:"iconfont icon-shangjia",name:"商家",alink:"/merchant"},
              {id:3,icon:"iconfont icon-icon-test",name:"商城",alink:"/mall"},
               {id:4,icon:"iconfont icon-xiaoxi",name:"消息",alink:"/message"},
                {id:5,icon:"iconfont icon-wodedangxuan",name:"我的",alink:"/my"},
          ]
        }
    },
    methods:{
      handle(index){
        this.idx=index;
      }
    }
}
</script>

<style scoped >
.active >>>span{
  color: red;
}
 .g-footer span:nth-child(1) {
    display: block;
    font-size: 1.5rem;
}
.g-footer{
	position: fixed;
	left:0;
	bottom:0;
	display: flex;
	justify-content: space-around;
	width: 100%;
	background: white;
	height: 3.125rem;
	z-index: 100;
	padding-top: 0.3125rem;
}
.g-footer a{
	display: inline-block;
	text-align: center;
	font-size: 0.875rem;
	color:black;
}
.g-footer span{
	display: block;
	font-size: 0.75rem;
}


</style>
