<template>
	<div class="MenuBar">
		<ul>
			<li>
				<router-link to="/">
					<p class="iconfont">&#xe644;</p>
					<span>首页</span>
				</router-link>
			</li>
			<li>
				<router-link to="/Classify">
					<p class="iconfont">&#xe600;</p>
					<span>分类</span>
				</router-link>
			</li>
			<li>
				<router-link to="/ShopCar">
					<p class="iconfont">&#xe8a8;</p>
					<span>购物车</span>
				</router-link>
			</li>
			<li>
				<router-link to="/User">
					<p class="iconfont">&#xe604;</p>
					<span>我的</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"MenuBar"
	}
</script>

<style scoped lang="less">
	*{
		padding: 0;
		margin: 0;
		list-style: none;
	}
	
	.border-top(@borderWidth,@borderColor){
		border-top:@borderWidth @borderColor solid
	}
	
	.MenuBar{
		width: 100%;
		height: 97px;
		.border-top(1px,#333333);
		position: fixed;
		bottom: 0;
		background: #fff;
	}
	
	.MenuBar ul{
		height: 97px;
		display: flex;
		justify-content: space-between;
		
	}
	
	.MenuBar ul li{
		width: 25%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
	}
	
	.MenuBar ul li span{
		font-size: 24px;
	}
	
	.MenuBar ul li p{
		font-size: 30px;
		margin-bottom: 10px;
	}
	
	.router-link-exact-active {
		color: #005580;
	}
	
</style>