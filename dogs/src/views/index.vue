<template>
<div>
    <index-head></index-head>
    <index-carousel></index-carousel>
    <index-discount></index-discount>
    <index-dogs></index-dogs>
</div>
</template>
<script>
import IndexHead from "../components/index/indexhead";
import IndexCarousel from "../components/index/indexcarousel";
import IndexDiscount from "../components/index/indexdiscount";
import IndexDogs from "../components/index/indexdogs";
export default {
    data(){
        return{

        }
    },
    components:{
        IndexHead,
        IndexCarousel,
        IndexDiscount,
        IndexDogs
    },
   
}
</script>
<style scoped>

</style>