<template>
    <header class="header">
			<svg class="icon font1" aria-hidden="true" style=" float: left;">
				<use xlink:href="#icon-kefu"></use>
			</svg>
			<div class="mui-input-row mui-search" id="search">
				<input type="search" class="mui-input-clear" placeholder="搜锁宠物、商家、品牌">
			</div>
			<svg class="icon font2" aria-hidden="true" style=" float: left;">
				<use xlink:href="#icon-zhuanfa-"></use>
			</svg>

		</header>
</template>
<script>

export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>

.icon {
			  width: 1em;
			  height: 1em;
			  vertical-align: -0.15em;
			  fill: currentColor;
			  overflow: hidden;
			}
.header{
	clear: both;
	padding-top: 0.9375rem;
	padding-left: 0.9375rem;
	background-color: white;
	height: 3.125rem;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
}
#search{
	width: 80%;
	float: left;
	height: 1.875rem;
	margin-left: 1.75rem;
	margin-top: -1.5625rem;
	border-radius: 0.9375rem;
}
.font1{
	font-size: 1.25rem;


}
.font2{
	font-size: 1.25rem;
	margin-left:0.5rem;
	margin-top: -1.25rem;
}
</style>
