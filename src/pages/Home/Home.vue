<template>
	<div class="Home">
		<Header></Header>
		<Banner></Banner>
		<Prolist></Prolist>
		<MenuBar></MenuBar>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue'
	import Banner from '@/pages/Home/components/Banner.vue'
	import Prolist from '@/pages/Home/components/Prolist.vue'
	export default{
		name:"Home",
		components:{
			Header,
			Banner,
			Prolist
		}
	}
</script>

<style scoped>
	
</style>