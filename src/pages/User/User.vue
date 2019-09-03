<template>
	<div class="User">
		<div class="header">
			<router-link to="/login">
				<div class="info">
					<img src="" alt="">
					<span class="userName">请点击登陆</span>
				</div>
			</router-link>
		</div>
		<MenuBar></MenuBar>
	</div>
</template>

<script>
	export default{
		name:"User"
	}
</script>

<style scoped>
	.header{
		height: 200px;
		background: #005580;
		padding: 0 24px;
	}
	.info{
		width: auto;
		height: 200px;
		display: flex;
		align-items: center;
	}
	.info img{
		width: 136px;
		height: 136px;
		border: 1px #999 solid;/*no*/
		border-radius: 50%;
		background: #666666;
	}
	.info .userName{
		color: #FFFFFF;
		font-size: 36px;
		margin-left: 10px;
	}
</style>