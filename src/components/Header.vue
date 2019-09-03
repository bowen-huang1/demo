<template>
	<div class="Header">
		<form>
			<input type="text" placeholder="插座" @click="handleClick()">
			<span><b class="iconfont">&#xe612;</b>搜索</span>
		</form>
	</div>
</template>

<script>
	export default{
		name:"Header",
		methods:{
			handleClick(){
				this.$router.push('Search')
			}
		}
	}
	
</script>

<style scoped lang="less">
	@padding-left:20px;
	.Header{
		width: 100%;
		height: 86px;
		background: #005580;
		display: flex;
		z-index: 999;
		align-items: center;
	}
	
	.back{
		color: #FFFFFF;
		font-size: 38px;
		margin: 0 50px 0 24px;
	}
	
	form{
		width: 550px;
		height: 46px;
		border-radius: 10px;
		overflow: hidden;
		background: #FFFFFF;
		display: flex;
		margin: 0 auto;
	}
	
	input{
		width: 440px;
		height: 46px;
		padding-left: @padding-left;
	}
	
	span{
		font-size: 24px;
		padding-top: 5px;
		vertical-align: middle;
		text-align: center;
		color: #116f70;
	}
	
	b{
		font-size: 36px;
		vertical-align: middle;
	}
	
	
</style>