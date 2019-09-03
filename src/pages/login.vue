<template>
	<div class="login">
		<div class="header">
			<span class="iconfont span" @click="handleClick()">&#xe69b;</span>
			<span class="title">登陆</span>
		</div>
		<div class="main">
			<form>
				<label for="user">
					<table>账号：</table>
					<input type="text" placeholder="请输入手机号/邮箱/用户名" v-model="account" id="user">
				</label>
				<label for="pwd">
					<table>密码：</table>
					<input :type="pwd" placeholder="请输入密码" id="pwd" v-model="password">
					<span class="iconfont" @click="Switch()">&#xe648;</span>
				</label>
				<p>找回密码</p>
				<button type="submit" class="submit" @click.prevent="handleSubmit()">登陆</button>
				<router-link to=/register>
					<button>注册</button>
				</router-link>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {
				"account":"",
				"pwd":"password",
				"password":""
			}
		},
		methods:{
			handleClick(){
				this.$router.push('/User')
			},
			Switch(){
				if(this.pwd === "password"){
					this.pwd = "text"
				}else if(this.pwd === "text"){
					this.pwd = "password"
				}
			},
			handleSubmit(){
				var that = this
				var xhrLogin = new XMLHttpRequest()
				xhrLogin.withCredentials = true
				xhrLogin.onreadystatechange = function() {
					if (xhrLogin.readyState == 4 && xhrLogin.status == 200) {
						var value = JSON.parse(xhrLogin.responseText).code
						if(value === "100"){
							that.$router.push('/User')
						}
					}
				}
				xhrLogin.open("POST", "http://api.imecho.cn/dodiapi/login.php", true)
				xhrLogin.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
				xhrLogin.send("account=" + this.account + "&password=" + this.pwd)
			}
		}
	}
</script>

<style scoped>
	.header {
		width: 750px;
		height: 88px;
		text-align: center;
		line-height: 88px;
		background: #005580;
		position: fixed;
		top: 0;
	}

	.span {
		position: absolute;
		top: 0;
		left: 24px;
		font-size: 38px;
		color: #FFFFFF;
	}

	.title {
		font-size: 36px;
		color: #FFFFFF;
	}
	.main form{
		width: 750px;
		height: auto;
		margin-top: 88px;
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
	.main form label span{
		font-size: 36px;
		margin-left: 150px;
	}
	.main form p{
		padding: 0 24px;
		line-height: 105px;
		color: #116f70;
		font-size: 28px;
		float: right;
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
	}
</style>
