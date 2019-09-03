<template>
	<div class="register">
		<div class="header">用户注册</div>
		<div class="main">
			<form>
				<label>
					<table>账号：</table>
					<input type="text" placeholder="请输入手机号/邮箱/用户名" v-model="account">
				</label>
				<label>
					<table>密码：</table>
					<input type="password" placeholder="请输入密码" v-model="password">
				</label>
				<label>
					<table>确认密码：</table>
					<input type="password" placeholder="请输入再次密码">
				</label>
				<label>
					<table>验证码：</table>
					<input type="text" placeholder="请输入验证码" v-model="code">
					<img ref="codeImage" @click="reflash()" src="http://api.imecho.cn/dodiapi/code.php?n=4&info=30$80$40">
				</label>
				<label>
					<div class="label">
						<label class="read">
							<b
								class="iconfont"
								:class="checked === true ? 'active' : null "
								@click="checked = !checked"
							>&#xe60b;</b>
							<input type="checkbox" :checked="checked" hidden>
						</label>
						<a href="###">我已阅读并已同意注册<span>《服务协议》</span></a>
					</div>
				</label>
				<button type="submit" class="submit" @click.prevent="handleSubmit()">注册</button>
				<router-link to=/login>
					<button>登陆</button>
				</router-link>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name:"register",
		data() {
			return {
				checked:false,
				"account":"",
				"password":"",
				"code":""
			}
		},
		methods:{
			 handleSubmit(){
				 var xhr = new XMLHttpRequest()
				 xhr.withCredentials = true
				 xhr.onreadystatechange = function() {
				 	if (xhr.readyState == 4 && xhr.status == 200) {
				 		console.log(xhr.responseText)
				 	}
				 }
				 xhr.open("POST", "http://api.imecho.cn/dodiapi/reg.php", true)
				 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
				 xhr.send("account=" + this.account + "&password=" + this.password)
			 },
			 reflash() {
			 	this.$refs.codeImage.attributes.src.nodeValue = "http://api.imecho.cn/dodiapi/code.php?n=4&info=30$80$40"
			 }
		}
	}
</script>

<style scoped>
	.header{
		width: 750px;
		height: 88px;
		text-align: center;
		line-height: 88px;
		background: #005580;
		color: #FFFFFF;
		font-size: 36px;
	}
	.main form{
		width: 750px;
		height: auto;
	}
	.main form label{
		width: 702px;
		height: 96px;
		border-bottom: 1px solid #cccccc;
		display: flex;
		align-items: center;
		padding: 0 24px;
		font-size: 32px;
		color: #333333;
	}
	.main form label input{
		margin-left: 20px;
	}
	button{
		width: 648px;
		height: 78px;
		text-align: center;
		border: 1px solid #666666;/*no*/
		color: #333333;
		font-size: 32px;
		background: #FFFFFF;
		display: block;
		margin: 0 auto;
		border-radius: 10px;
		margin-bottom: 40px;
	}
	.submit{
		background: #005580;
		border: 1px solid #005580;/*no*/
		color: #FFFFFF;
		margin-top: 48px;
	}
	.label{
		display: flex;
		align-items: center;
	}
	.read{
		padding: 0 !important;
		width: 36px !important;
	}
	b{
		font-size: 36px;
		color: #cccccc;
	}
	.active{
		color: #005580;
	}
	.label span{
		color: #116f70;
	}
</style>
