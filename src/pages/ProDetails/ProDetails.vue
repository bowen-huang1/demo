<template>
	<div class="ProDetailt" ref="ProDetails">
		<div class="warp" ref="warp">
			<div class="Header">
				<span class="iconfont" @click="handleClick">&#xe69b;</span>
				<img :src="imgUrl">
			</div>
			<div class="Title">
				<h1>{{title}}</h1>
				<span>{{price | rmb}}</span>
			</div>
			<div class="introduce">
				<h2>{{introduce}}</h2>
				<h3>{{characteristic}}</h3>
				<p>{{prodetails}}</p>
			</div>
			<div class="delivery">
				<div class="model" @click="showMask()">
					已选
					<span class="model_title">{{title}}</span>
					<b>X<span>{{ProNums}}</span></b>
				</div>
				<div class="adress">
					送至
					<span class="detailed_address">广东 广州市 天河区 五山街道 岑村987号</span>
					<b>有现货</b>
				</div>
			</div>
		</div>
		<div class="mask" v-show="bool">
			<div class="bg" @click="closeMask()"></div>
			<order class="order" :value="title" @close="closemask" @number="number"></order>
		</div>
		<div class="alert" v-show="boolB">成功添加到购物车</div>
		<div class="buyMenu" v-show="boolC">
			<button class="shopcar" @click="shopCar()">加入购物车</button>
			<button class="buy">立即购买</button>
		</div>
	</div>
</template>

<script>
	import order from './components/order'
	export default {
		name: "ProDetails",
		components:{
			order
		},
		data() {
			return {
				id:1,
				imgUrl: require('../../images/ProDetails/ProDetails1.jpg'),
				title: "请选择产品类型",
				price: "",
				ProNums:1,
				bool: false,
				boolB: false,
				boolC:true,
				introduce: "产品详细介绍",
				characteristic: "产品特点：",
				prodetails: "家用户外防水插座，220V 10A三插、两插插头在非防护状态都可以使用就可满足家用。（防护级别IP66可以满足家庭需要，IP66是四面八方猛烈喷水不进水，1米水里浸泡1小时不进水）要注意一点室外插座一般上是塑料材质，要考虑防老化。",
				arr:[]
			}
		},
		filters: {
			rmb(val) {
				return "￥" + val
			}
		},
		methods: {
			handleClick(){
				this.$router.back(-1)
			},
			showMask() {
				this.bool = true
				this.boolC = false
			},
			shopCar() {
				if(this.title === "请选择产品类型"){
					this.bool = true
					this.boolC = false
				}else{
					var that = this
					this.boolB = true
					setTimeout(function(){
						that.boolB = false
					},1000)
					this.proItems = {
						"id":this.id,
						"ImgUrl":this.imgUrl,
						"title":this.title,
						"ProNums":this.ProNums,
						"ProPrice":this.price,
						"checked":false
					} 
					this.arr.push(this.proItems)
					localStorage.setItem("proItems",JSON.stringify(this.arr))
					this.id++
				}
			},
			closeMask(){
				this.bool = false
				this.boolC = true
			},
			closemask(data){
				this.bool = false
				this.boolC = true
				var that = this
				setTimeout(function(){
					that.boolB = false
				},1000)
				this.title = data.title
				this.price = data.price
			},
			number(data){
				this.ProNums = data
			}
		},
		mounted(){
			if(localStorage.getItem("proItems")){
				this.arr = JSON.parse(localStorage.getItem("proItems"))
			}
		}
	}
</script>

<style scoped>
	.ProDetailt{
		position: relative;
	}
	
	.warp {
		position: absolute;
		margin-bottom: 80px;
	}

	.Header {
		display: flex;
	}

	.Header span {
		font-size: 38px;
		margin: 25px 0 0 24px;
	}

	.Header img {
		width: 630px;
		height: 630px;
	}

	.Title {
		width: 100%;
		height: 98px;
		border-top: 9px solid #cccccc;
		border-bottom: 9px solid #cccccc;
		padding: 0 24px;
	}

	.Title h1 {
		font-size: 32px;
		color: #333333;
		line-height: 58px;
	}

	.Title span {
		font-size: 32px;
		color: #005580;
	}

	.introduce {
		padding: 0 24px 58px;
		border-bottom: 10px solid #cccccc;
	}

	.introduce h2 {
		font-size: 28px;
		color: #333333;
		margin: 46px 0 32px 0;
	}

	.introduce h3 {
		font-size: 24px;
		color: #333333;
		margin-bottom: 20px;
	}

	.introduce p {
		font-size: 24px;
		color: #333333;
		line-height: 42px;
	}

	.delivery .model {
		padding: 0 24px;
		line-height: 82px;
		font-size: 24px;
		color: #333333;
	}

	.delivery .model .model_title {
		margin: 0 40px 0 24px;
	}

	.delivery .adress {
		padding: 0 24px;
		line-height: 82px;
		font-size: 24px;
		color: #333333;
	}

	.delivery .adress .detailed_address {
		margin: 0 40px 0 24px;
	}

	.buyMenu {
		width: 100%;
		height: 80px;
		position: fixed;
		z-index: 999;
		bottom: 0;
		left: 0;
		line-height: 80px;
	}

	.shopcar {
		width: 50%;
		height: 80px;
		text-align: center;
		background: #FFFFFF;
		font-size: 36px;
		color: #333333;
	}

	.buy {
		width: 50%;
		height: 80px;
		text-align: center;
		background: #005580;
		font-size: 36px;
		color: #FFFFFF;
	}

	.mask {
		height: 1294px;
		width: 100%;
		position: absolute;
		overflow-y: hidden;
		z-index: 2;
	}

	.mask .bg {
		width: inherit;
		height: inherit;
		background: #000;
		opacity: 0.8;
	}

	.mask .order {
		width: inherit;
		height: 750px;
		background: #fff;
		position: absolute;
		bottom: 0px;
	}

	.alert {
		width: 240px;
		height: 80px;
		border-radius: 10px;
		background: #000;
		color: #fff;
		opacity: 0.8;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		z-index: 10;
		text-align: center;
		line-height: 80px;
		font-size: 26px;
	}
</style>
