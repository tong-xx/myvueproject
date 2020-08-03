<template>
   	<div class="mui-content" style="background-color: white;margin-top: 3.125rem;">
		<div class="swiper-container  ad">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="../../assets/img/img01.png" >
					</div>
					<div class="swiper-slide">
							<img src="../../assets/img/img02.png" >
					</div>
					<div class="swiper-slide">
							<img src="../../assets/img/img03.png" >
					</div>
					<div class="swiper-slide">
							<img src="../../assets/img/img04.png" >
					</div>
				</div>
				<!-- 如果需要分页器 -->
				<div class="swiper-pagination"></div>
			</div>

			<ul class="mui-table-view mui-grid-view">
				<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3">
					<img src="../../assets/img/img5.png">
					<p>附近</p>
				</li>
				<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3">
					<img src="../../assets/img/img6.png">
					<p>狗狗</p>
				</li>
				<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3">
					<img src="../../assets/img/img7.png">
					<p>猫猫</p>
				</li>
				<li class="mui-table-view-cell mui-col-sm-3 mui-col-xs-3">
					<img src="../../assets/img/img8.png">
					<p>商城</p>
				</li>
			</ul>
		</div>
</template>
<script>
import Swiper from "swiper"
export default {
    data(){
        return{}
    },
  methods:{
	  initSwiper(){
		   new Swiper ('.ad', {
			direction: 'horizontal',
			loop: true, // 循环模式选项
			autoplay:true,
			// 如果需要分页器
			pagination: {
			el: '.swiper-pagination',
			 clickable:true
			},

  		})
	  }
  },
   mounted(){

                this.initSwiper();

        }

}
</script>
<style scoped>

.swiper-slide img{
	width: 100%;
}
</style>
