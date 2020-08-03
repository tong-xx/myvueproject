<template>
<div>
   <Merchant></Merchant>
   <merchant-content>
       
   </merchant-content>
</div>
</template>
<script>
import Merchant from "../components/merchant/merchanthead";
import MerchantContent from "../components/merchant/merchantcontent";
export default {
    data(){
        return{

        }
    },
    components:{
       Merchant,
       MerchantContent,
    },
   
}
</script>
<style scoped>

</style>