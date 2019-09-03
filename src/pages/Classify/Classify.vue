<template>
	<div class="Classify">
		<Header class="Header"></Header>
		<span class="iconfont back" @click="handleClick()">&#xe69b;</span>
		<div class="warp">
			<div class="type" ref="left">
				<ul>
					<li 
						v-for="(item,index) of type" 
						:key="index"
						@click="content(index,$event)"
						:class="{on:index === active}"
					>{{item}}</li>
				</ul>
			</div>
			<div class="product" ref="right">
				<ul>
					<li v-for="(items,index) of proList" :key="index" ref="wrapperList">
						<ul>
							<li v-for="(item, i) of items" :key='i'>
								<img :src="item.imgUrl">
								<p>{{item.proName}}</p>
							</li>
						</ul>
						
					</li>
				</ul>
			</div>
		</div>
		<MenuBar></MenuBar>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue'
	import BetterScroll from 'better-scroll'
	export default {
		name: "Classify",
		components: {
			Header,
			BetterScroll
		},
		data() {
			return {
				// active:0,
				listHeight:[],
				clickEvent:false,
				scrollY:0,
				type: ["海外F8系列", "海外V8系列", "海外K3系列", "V19系列", "V16系列", "V9系列", "V8系列"],
				proList: [
					[
						{
							imgUrl: require('@/images/Classify/classify1.jpg'),
							proName: "海外F8"
						}, {
							imgUrl: require('@/images/Classify/classify2.jpg'),
							proName: "海外F8"
						}, {
							imgUrl: require('@/images/Classify/classify3.jpg'),
							proName: "海外F8"
						}, {
							imgUrl: require('@/images/Classify/classify4.jpg'),
							proName: "海外F8"
						}, {
							imgUrl: require('@/images/Classify/classify5.jpg'),
							proName: "海外F8"
						}, {
							imgUrl: require('@/images/Classify/classify5.jpg'),
							proName: "海外F8"
						}
					],
					[ 
						{
							imgUrl: require('@/images/Classify/classify6.jpg'),
							proName: "海外V8"
						}, {
							imgUrl: require('@/images/Classify/classify7.jpg'),
							proName: "海外V8"
						}, {
							imgUrl: require('@/images/Classify/classify8.jpg'),
							proName: "海外V8"
						}, {
							imgUrl: require('@/images/Classify/classify9.jpg'),
							proName: "海外V8"
						}, {
							imgUrl: require('@/images/Classify/classify10.jpg'),
							proName: "海外V8"
						}, {
							imgUrl: require('@/images/Classify/classify11.jpg'),
							proName: "海外V8"
						}, {
							imgUrl: require('@/images/Classify/classify12.jpg'),
							proName: "海外V8"
						}, {
							imgUrl: require('@/images/Classify/classify13.jpg'),
							proName: "海外V8"
						}, {
							imgUrl: require('@/images/Classify/classify14.jpg'),
							proName: "海外V8"
						}
					],
					[ 
						{
							imgUrl: require('@/images/Classify/classify16.jpg'),
							proName: "海外K3"
						}, {
							imgUrl: require('@/images/Classify/classify17.jpg'),
							proName: "海外K3"
						}, {
							imgUrl: require('@/images/Classify/classify18.jpg'),
							proName: "海外K3"
						}, {
							imgUrl: require('@/images/Classify/classify19.jpg'),
							proName: "海外K3"
						}, {
							imgUrl: require('@/images/Classify/classify20.jpg'),
							proName: "海外K3"
						}, {
							imgUrl: require('@/images/Classify/classify1.jpg'),
							proName: "海外K3"
						}, {
							imgUrl: require('@/images/Classify/classify2.jpg'),
							proName: "海外K3"
						}, {
							imgUrl: require('@/images/Classify/classify3.jpg'),
							proName: "海外K3"
						}, {
							imgUrl: require('@/images/Classify/classify4.jpg'),
							proName: "海外K3"
						}
					], 
					[
						{
							imgUrl: require('@/images/Classify/classify6.jpg'),
							proName: "V19"
						}, {
							imgUrl: require('@/images/Classify/classify7.jpg'),
							proName: "V19"
						}, {
							imgUrl: require('@/images/Classify/classify8.jpg'),
							proName: "V19"
						}, {
							imgUrl: require('@/images/Classify/classify9.jpg'),
							proName: "V19"
						}, {
							imgUrl: require('@/images/Classify/classify10.jpg'),
							proName: "V19"
						}, {
							imgUrl: require('@/images/Classify/classify6.jpg'),
							proName: "V19"
						}
					],
					[
						{
							imgUrl: require('@/images/Classify/classify11.jpg'),
							proName: "V16"
						},  {
							imgUrl: require('@/images/Classify/classify13.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify14.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify15.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify16.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify17.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify18.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify19.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify20.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify21.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify1.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify2.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify3.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify4.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify5.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify6.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify7.jpg'),
							proName: "V16"
						}, {
							imgUrl: require('@/images/Classify/classify8.jpg'),
							proName: "V16"
						}
					],
					[
						{
							imgUrl: require('@/images/Classify/classify11.jpg'),
							proName: "V9"
						},  {
							imgUrl: require('@/images/Classify/classify13.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify14.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify15.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify16.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify17.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify18.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify19.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify20.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify21.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify1.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify2.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify3.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify4.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify5.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify6.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify7.jpg'),
							proName: "V9"
						}, {
							imgUrl: require('@/images/Classify/classify8.jpg'),
							proName: "V9"
						}
					],
					[
						{
							imgUrl: require('@/images/Classify/classify11.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify12.jpg'),
							proName: "V8"
						},  {
							imgUrl: require('@/images/Classify/classify14.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify15.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify16.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify17.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify18.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify19.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify20.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify21.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify1.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify2.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify3.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify4.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify5.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify6.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify7.jpg'),
							proName: "V8"
						}, {
							imgUrl: require('@/images/Classify/classify8.jpg'),
							proName: "V8"
						}
					]
				]
			}
		},
		methods: {
			handleClick() {
				this.$router.back(-1)
			},
			content(i){
				// this.active = i
				this.clickEvent = true
				if(!event._constructed){
					return
				}else{
					var right =  this.$refs.wrapperList
					var el = right[i]
					this.rights.scrollToElement(el,300)
				}
			},
			initScroll(){
				var that = this
				this.lefts = new BetterScroll(this.$refs.left,{
					click:true
				})
				this.rights = new BetterScroll(this.$refs.right,{
					probeType:3,
					click: true
				})
				
				this.rights.on("scroll",function(props){
					that.scrollY = Math.abs(Math.round(props.y))
				})
			},
			getHeight(){
				var itemHeight = this.$refs.wrapperList
				var height = 0
				var that = this
				this.listHeight.push(height)
				for(var i = 0;i<=itemHeight.length-1;i++){
					height += itemHeight[i].clientHeight
					that.listHeight.push(height)
				}
			}
		},
		created(){
			var that = this
		// 	this.$http.get('/api/classifyJson')
		// 	.then(function(res){
		// 		that.proList = res.data.data
				that.$nextTick(function(){
					that.initScroll()
					that.getHeight()
				})
		// 	})
		},
		computed:{
			active:function(){
				for(var i = 0; i<this.listHeight.length-1; i++){
					var h1 = this.listHeight[i]
					var h2 = this.listHeight[i+1]
					
					if(this.scrollY >= h1 && this.scrollY < h2){
						return i
					}
					if(this.scrollY >= this.listHeight[this.listHeight.length-1]){
						return 0
					}
				}
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.getHeight()
			})
		}
	}

</script>

<style scoped>
	.back {
		position: fixed;
		top: 25px;
		left: 24px;
		font-size: 38px;
		color: #FFF;
	}

	.Header {
		position: fixed;
		top: 0;
	}

	.warp {
		height: 1000px;
		margin-top: 86px;
		display: flex;
	}

	.type {
		width: 208px;
		margin-right: 20px;
	}

	.type ul {
		width: 198px;
		height: 100%;
		border-right: 10px solid #cccccc;
		position: fixed;
	}

	.type ul li {
		width: 198px;
		height: 100px;
		line-height: 100px;
		text-align: center;
		border-bottom: 1px solid #cccccc;
	}

	.type .on {
		background: #005580;
		color: #FFFFFF;
	}

	.product {
		width: 542px;
		height: auto;
		padding-bottom: 98px;
	}

	.product ul {
		width: 522px;
		height: auto;
	}
	
	.product ul li ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.product ul li ul li {
		margin-right: 20px;
	}

	.product ul li ul li img {
		width: 148px;
		height: 148px;
		border: 1px solid #CCCCCC;
		/*no*/
	}

	.product ul li ul li p {
		text-align: center;
		font-size: 20px;
		color: #333333;
		line-height: 48px;
	}
</style>
