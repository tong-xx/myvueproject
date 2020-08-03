<template>
  <header class="mui-bar mui-bar-nav head">
			<h1 class="mui-title">{{title}}</h1>
		</header>
</template>
<script>
export default {
  props:["title"]
}
</script>
<style scoped>
.head{
  background-color: #fff;
}
</style>
