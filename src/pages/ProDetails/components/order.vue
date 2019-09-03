<template>
	<div class="warper">
		<div class="head">
			<img :src="imgUrl">
			<div class="message">
				<ul>
					<li 
						v-for="(item,index) of type" 
						:key="index" :class="active === index ? 'price_active' : null"
						ref="li"
					>{{item.price | rmb}}</li>
				</ul>
				<span class="num">库存{{num}}</span>
			</div>
		</div>
		<div class="main">
			<h2>插座型号</h2>
			<ul>
				<li 
					v-for="(item,index) of type" 
					:key="item.id" 
					@click="check(index)" 
					:class="active === index ? 'on' : null"
				>
					<label :for="item.id">
						<input type="radio" :id="item.id" ref="radio" name="type" hidden>
						<em ref="model">{{item.title}}</em>
					</label>
				</li>
			</ul>
		</div>
		<div class="number">
			<h2>购买数量</h2>
			<div class="nums" @click="Num">
				<button @click="reduce()">-</button>
				<input type="text" value="1" v-model.number="number" @input="handleInput()">
				<button @click="add()">+</button>
			</div>
		</div>
		<div class="sure" v-show="boolD">
			<button class="Sure" @click="sub()">确定</button>
		</div>
	</div>
</template>
<script>
	export default {
		name: "order",
		props: ['value'],
		data() {
			return {
				imgUrl:require("@/images/ProDetails/ProDetails1.jpg"),
				type:[],
				num:999,
				active:0,
				number:1,
				arr:[],
				proItems:{},
				id:1,
				boolD:true
			}
		},
		created() {
			if(this.value){
				this.type = this.$store.state.type
			}
		},
		filters:{
			rmb(val) {
				return "￥" + val
			}
		},
		methods:{
			check(i){
				this.active = i
			},
			handleInput(){
				var rule = /^[0-9]*[1-9][0-9]*$/
				// console.log(rule.test(this.number))
				if(!rule.test(this.number)){
					this.number = 1
				}
			},
			add(){
				this.number++
			},
			reduce(){
				if(this.number>1){
					this.number--
				}else{
					this.number = 1
				}
			},
			Num(){
				this.$emit("number",this.number)
			},
			sub(){
				this.$emit('close',this.type[this.active])
			}
		}
	}
</script>
<style scoped>
	.warper{
		width: 100%;
		height: auto;
		padding-bottom: 100px;
		padding-top: 10px;
		padding-left: 5px;
	}
	.head{
		width: 100%;
		margin-bottom: 20px;
		background: #FFFFFF;
		display: flex;
	}
	
	.head img{
		width: 200px;
		height: 200px;
		border: 3px solid #CCCCCC;/*no*/
		border-radius: 10px;
		vertical-align: top;
		margin-right: 20px;
	}
	
	.head .message{
		vertical-align: top;
	}
	
	.head .message ul li{
		font-size: 50px;
		margin: 10px 0;
		color: red;
		display: none;
	}
	
	.head .message .price_active{
		display: block;
		font-size: 50px;
		margin: 10px 0;
		color: red;
	}
	
	.head .message .num{
		font-size: 40px;
		color: #666;
	}
	
	.main{
		margin-bottom: 20px;
	}
	
	h2{
		font-size: 38px;
		color: #333333;
	}
	.main ul {
		height: auto;
		display: flex;
		flex-wrap: wrap;
		margin: 30px 0;
	}
	.main ul li{
		width: 350px;
		height: 50px;
		background: #FFFFFF;
		color: #333333;
		margin-right: 20px;
		margin-bottom: 10px;
		text-align: center;
		line-height: 50px;
		font-size: 18px;
		border-radius: 15px;
	}
	
	.main ul .on{
		color: #FFFFFF;
		background: #005580;
	}
	.number{
		clear: both;
		display: flex;
		justify-content: space-between;
	}
	
	.number .nums{
		margin-right: 35px;
	}
	
	.number .nums button{
		width: 50px;
		height: 50px;
		background: #FFFFFF;
		color: #333333;
		font-size: 38px;
		border: 1px solid #333333;/*no*/
		text-align: center;
		line-height: 50px;
	}
	.number .nums input{
		width: 50px;
		height: 46px;
		text-align: center;
		border: 1px solid #333333;/*no*/
		margin: 0 5px;
	}
	
	.sure{
		width: 100%;
		height: 80px;
		position: fixed;
		bottom: 0;
		z-index: 999;
	}
	
	.sure .Sure{
		width: 730px;
		height: 80px;
		margin-left: 10px;
		text-align: center;
		line-height: 80px;
		color: #FFFFFF;
		background: #005580;
		font-size: 28px;
		border-radius: 20px;
	}
	
</style>
