<template>
<div>
  <mall-head title="商城"></mall-head>
  <mall-middle></mall-middle>
  <mall-food></mall-food>
  <mall-band></mall-band>
</div>
</template>
<script>
import MallHead from '../components/mall/mallhead.vue'
import MallMiddle from '../components/mall/mallmiddle'
import MallFood from '../components/mall/mallfood'
import MallBand from '../components/mall/mallband'
export default {
  props:["title"],
 components:{
     MallHead,
    MallMiddle,
     MallFood,
     MallBand
  }
}
</script>
<style scoped>

</style>
