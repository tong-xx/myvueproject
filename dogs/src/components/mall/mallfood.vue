<template>
  <div>
    <div class="taocan">
			<img src="../../assets/img/1.png" style="width:1.5rem;vertical-align: middle;">
			<span style="font-weight: 700;font-size:  0.75rem;">养宠套餐</span>
		</div>
		<ul class="mui-table-view mui-grid-view" id="saledogs">
			<li class="mui-table-view-cell mui-col-sm-6 mui-col-xs-6">
				<ul class="mui-table-view  ulbefore">
					<li class="mui-table-view-cell mui-media" >
						<a href="javascript:;" >
							<img class="mui-media-object mui-pull-right" src="../../assets/img/3.png" >
							<p >小体型犬</p>
							<p >低至99元起</p>

						</a>
					</li>

				</ul>
			</li>
			<li class="mui-table-view-cell mui-col-sm-6 mui-col-xs-6">
				<ul class="mui-table-view ulbefore">
					<li class="mui-table-view-cell mui-media" >
						<a href="javascript:;" >
							<img class="mui-media-object mui-pull-right" src="../../assets/img/2.png" style="height: 4.6875rem;">
							<p >中体型犬</p>
							<p >低至99元起</p>

						</a>
					</li>

				</ul>
			</li>
			<li class="mui-table-view-cell mui-col-sm-6 mui-col-xs-6">
				<ul class="mui-table-view ulbefore">
					<li class="mui-table-view-cell mui-media" >
						<a href="javascript:;" >
							<img class="mui-media-object mui-pull-right" src="../../assets/img/4.png" style="height: 4.6875rem;">
							<p >大体型犬</p>
							<p >低至99元起</p>

						</a>
					</li>

				</ul>
			</li>
			<li class="mui-table-view-cell mui-col-sm-6 mui-col-xs-6">
				<ul class="mui-table-view ulbefore">
					<li class="mui-table-view-cell mui-media" >
						<a href="javascript:;" >
							<img class="mui-media-object mui-pull-right" src="../../assets/img/5.png" style="height: 4.6875rem;">
							<p >猫咪套餐</p>
							<p >低至99元起</p>

						</a>
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
<style >
.icon {
	  width: 1em;
	  height: 1em;
	  vertical-align: -0.15em;
	  fill: currentColor;
	  overflow: hidden;
  }
  .taocan{
	height: 2.1875rem;
	background-color: white;
	margin-top: 0.125rem;

	line-height: 2.1875rem;

}
#saledogs{
	height: 12.5rem;
	padding: 0;
	padding-right: 3rem;
}

#saledogs li ul li{
	width: 100%;
	height: 5rem;
}
#saledogs li ul li a img{
	width: 3.75rem;
}
#saledogs li ul li a p:nth-of-type(1){
	margin-top: 1.25rem;
	margin-left: -1.875rem;
	color: #000000;
}
#saledogs li ul li a p:nth-of-type(2){
	margin-top: 0.3125rem;
	margin-left: -1.875rem;
	font-size: 0.75rem;
}
.ulbefore:before {
    position: absolute;
    right: 0;
    left: 0;
    height: 0;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: orange;
    top: -0.0625rem;
}
.ulbefore:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0.9375rem;
    height: 0;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}


</style>
