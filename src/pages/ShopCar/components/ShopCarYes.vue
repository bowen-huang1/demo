<template>
	<div class="ShopCarYes">
		<div class="main">
			<ul>
				<li v-for="(item,index) of proList" :key="item.id">
					<label>
						<b
							:class="item.checked === true ? 'active' : null "
							@click="item.checked = !item.checked"
						></b>
						<input type="checkbox" :checked="item.checked" hidden>
					</label>
					<img :src="item.ImgUrl" alt="">
					<div class="details">
						<h2>{{item.title}}</h2>
						<span>{{item.ProPrice | rmb}}</span>
					</div>
					<div class="warp">
						<span class="iconfont" @click="remove(index)">&#xe63a;</span>
						<div class="Num">
							<button @click="item.ProNums <= 1 ? item.ProNums = 1 : item.ProNums--">-</button>
							<input type="text" value="1" v-model="item.ProNums">
							<button @click="item.ProNums++">+</button>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="computed">
			<div class="btn">
				<label @click="allChecked()">
					<b 
						:class="isChecked ? 'active' : null "
					></b>
					<input 
						type="checkbox" 
						:checked="isChecked"
						hidden
					>
				</label>
				<span>全选</span>
			</div>
			
			<div class="total">
				<p>
					合计:
					<span>{{allTotal | rmb}}</span>
				</p>
			</div>
			
			<div class="accounts">
				结算
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"ShopCarYes",
		data() {
			return {
				proList: []
			}
		},
		filters: {
			rmb(val) {
				return "￥" + val
			}
		},
		methods: {
			handleClick() {
				this.$router.back(-1)
			},
			Checked(i) {
				this.state = !this.state
				if (this.state) {
					this.check = this.checkbox
				} else {
					this.check = {}
				}
			},
			remove(i){
				this.proList.splice(i,1)
				localStorage.setItem("proItems",JSON.stringify(this.proList))
			},
			allChecked(){
				var that = this
				this.proList.forEach(function(item,i){
					that.proList[i].checked = true
				})
			}
		},
		mounted() {
			if (localStorage.getItem("proItems")) {
				var pro = JSON.parse(localStorage.getItem("proItems"))
				this.proList = pro
			} else {
				this.$emit("proItemsNo")
			}
		},
		computed:{
			allTotal(){
				var total = 0
				var that = this
				this.proList.forEach(function(item,i){
					if(that.proList[i].checked){
						total += that.proList[i].ProPrice * that.proList[i].ProNums
					}
				})
				return total
			},
			isChecked(){
				var bool = true
				this.proList.forEach(function(item){
					if(item.checked === false){
						bool = false
					}
				})
				return bool
			}
		}
	}
</script>

<style scoped>
	.main {
			width: 750px;
			height: auto;
			margin-top: 82px;
		}
	
		.main ul {
			width: 750px;
			height: auto;
			border-top: 1px solid #cccccc;
			/*no*/
			border-bottom: 1px solid #cccccc;
			/*no*/
		}
	
		.main ul li {
			width: 750px;
			height: 150px;
			border-bottom: 10px solid #cccccc;
			padding: 0 24px;
			display: flex;
			align-items: center;
		}
	
		.main ul li:last-child {
			border: 0;
		}
	
		 .main ul li b{
			width: 43px;
			height: 43px;
			display: block;
			background: url(../../../images/ShopCar/check_none.png) no-repeat;
			background-size: 43px;
		}
		.main ul li .active{
			background: url(../../../images/ShopCar/check.png) no-repeat;
			background-size: 43px;
		}
	
		.main ul li img {
			width: 128px;
			height: 128px;
			border: 1px solid #666666;
			/*no*/
			margin: 0 36px 0 24px;
		}
	
		.details {
			width: 324px;
			height: inherit;
		}
	
		.details h2 {
			font-size: 22px;
			color: #333333;
			margin-top: 30px;
		}
	
		.details span {
			display: block;
			margin-top: 50px;
			font-size: 20px;
			color: #005580;
		}
		
		.warp{
			width: 152px;
			height: inherit;
		}
	
		.warp span {
			font-size: 24px;
			color: #005580;
			float: right;
			margin-top: 10px;
		}
	
		.Num {
			width: 150px;
			height: 50px;
			border: 1px solid #CCCCCC;
			/*no*/
			margin-top: 88px;
		}
	
		.Num button {
			width: 50px;
			height: 50px;
			background: #FFFFFF;
		}
	
		.Num input {
			width: 46px;
			height: 50px;
			border-left: 1px solid #CCCCCC;
			/*no*/
			border-right: 1px solid #CCCCCC;
			/*no*/
			text-align: center;
			line-height: 50px;
		}
		
		 .computed{
			width: 100%;
			height: 112px;
			border-top: 3px solid #eeeeee;
			display: flex;
			position: fixed;
			bottom: 98px;
			justify-content: space-between;
			align-items: center;
			background: #fff;
			z-index: 999;
		}
		.computed .btn{
			width: 230px;
			display: flex;
			margin-left: 24px;
		}
		.computed .btn label{
			width: 62px;
			height: inherit;
			display: block;
			vertical-align: middle;
		}
		.computed .btn b{
			width: 42px;
			height: 42px;
			display: block;
			background: url(../../../images/ShopCar/check_none.png) no-repeat;
			background-size: 42px;
		}
		.computed .btn .active{
			background: url(../../../images/ShopCar/check.png) no-repeat;
			background-size: 42px;
		}
		.computed .btn input{
			display: none;
		}
		.computed .btn span{
			font-size: 36px;
			color: #333333;
		}
		
		.computed .total{
			text-align: center;
			font-size: 36px;
		}
		.computed .total span{
			color: #005580;
		}
		
		.computed .accounts{
			width: 232px;
			height: inherit;
			background: #005580;
			color: #fff;
			text-align: center;
			line-height: 112px;
			font-size: 38px;
		}
</style>
