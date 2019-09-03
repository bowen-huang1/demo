<template>
	<div class="ShopCar">
		<div class="header">
			<span class="iconfont span" @click="handleClick()">&#xe69b;</span>
			<span class="title">购物车</span>
		</div>
		<div class="main">
			<shopcarYes v-if="bool" :proItemsNo="proItemsNo"></shopcarYes>
			<shopcarNo v-else></shopcarNo>
		</div>
		<MenuBar></MenuBar>
	</div>
</template>

<script>
	import shopcarYes from './components/ShopCarYes.vue'
	import shopcarNo from './components/ShopCarNo.vue'
	export default {
		name: "ShopCar",
		components:{
			shopcarYes,
			shopcarNo
		},
		data() {
			return {
				bool:false
			}
		},
		mounted(){
			if(localStorage.getItem("proItems")){
				this.bool = true
			}else{
				this.bool = false
			}
		},
		methods:{
			proItemsNo(){
				this.bool = false
			},
			handleClick(){
				this.$router.back(-1)
			}
		}
	}
</script>

<style scoped>
	.header {
		width: 750px;
		height: 82px;
		text-align: center;
		line-height: 82px;
		position: fixed;
		top: 0;
	}

	.span {
		position: absolute;
		top: 0;
		left: 24px;
		font-size: 38px;
	}

	.title {
		font-size: 36px;
		color: #333333;
	}
</style>
