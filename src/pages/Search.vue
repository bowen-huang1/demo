<template>
	<div class="Search">
		<Header></Header>
		<span class="iconfont" @click="handleClick()">&#xe69b;</span>
		<h1>热门搜索</h1>
		<ul>
			<li v-for="item of List" :key="item.id">{{item.proName}}</li>
		</ul>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue'
	export default{
		name:"Search",
		components:{
			Header
		},
		methods:{
			handleClick(){
				this.$router.back(-1)
			}
		},
		data(){
			return{
				List:[
					{
						"id":1,
						"proName":"F8系列"
					},
					{
						"id":2,
						"proName":"V8系列"
					},
					{
						"id":3,
						"proName":"K3系列"
					},
					{
						"id":4,
						"proName":"FU系列"
					},
					{
						"id":5,
						"proName":"MMC系列"
					},
					{
						"id":6,
						"proName":"MD系列"
					},
					{
						"id":7,
						"proName":"MMP系列"
					},
					{
						"id":8,
						"proName":"V18系列"
					},
					{
						"id":9,
						"proName":"K8系列"
					},
					{
						"id":10,
						"proName":"S18系列"
					},
					{
						"id":11,
						"proName":"S9系列"
					},
					{
						"id":12,
						"proName":"K50系列"
					}
				]
			}
		}
	}
</script>

<style scoped>
	span{
		position: absolute;
		top: 25px;
		left: 24px;
		font-size: 38px;
		color: #FFF;
	}
	h1{
		font-size: 32px;
		color: #333;
		margin: 30px 0;
		padding-left: 24px;
	}
	ul{
		padding: 0 24px;
		display: flex;
		flex-wrap: wrap-reverse;
	}
	li{
		width: 110px;
		height: 50px;
		border-radius: 12px;
		background: #005580;
		color: #fff;
		font-size: 20px;
		text-align: center;
		line-height: 50px;
		margin-right: 20px;
		margin-bottom: 10px;
	}
</style>