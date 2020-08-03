<template>
  <div id="app">

    <router-view/>
    <com-foot v-show="$route.meta.isShow"></com-foot>
  </div>
</template>

<script>
import ComFoot from "./views/footer"
export default {
  name: 'App',
  components:{
   ComFoot
  }
}
</script>

<style>
#app {

}
</style>
