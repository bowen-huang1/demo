<template>
	<div class="Prolist">
		<div class="hot" v-for="item of hot">
			<h2>{{item.title}}</h2>
			<swiper :options="swiperOption" tag="ul" class="listAll">
				<!-- slides -->
				<swiper-slide v-for="items of item.proList" :key="items.id" tag="li">
					<ul class="proList">
						<li v-for="itemes of items.listArray">
							<router-link to="/ProDetails">
								<img :src="itemes.imgUrl" class="image-item">
								<p>{{itemes.proName}}</p>
								<span>{{itemes.size}}</span>
								<b>{{itemes.num}}</b>
							</router-link>
						</li>
					</ul>
				</swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<div class="newPro" v-for="item of newPro">
			<h2>{{item.title}}</h2>
			<ul>
				<li v-for="items of item.proList">
					<img :src="items.imgUrl">
					<h3>{{items.proName}}</h3>
				</li>
			</ul>
		</div>
		<div class="explosion"  v-for="item of explosion">
			<h2>{{item.title}}</h2>
			<ul>
				<li v-for="items of item.proList">
					<img :src="items.imgUrl">
					<h3>{{items.proName}}</h3>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	export default {
		name: "Prolist",
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				hot: [{
					title: "人气插座",
					proList: [{
							listArray: [{
								id: 1,
								imgUrl: require('@/images/Home/pro1.jpg'),
								proName: "V16系列-一开单控带五孔插座",
								size: "86mm*86mm",
								num: "100件/包"
							}, {
								id: 2,
								imgUrl: require('@/images/Home/pro2.jpg'),
								proName: "V16系列-四开双控",
								size: "86mm*86mm",
								num: "100件/包"
							}]
						},
						{
							listArray: [{
								id: 1,
								imgUrl: require('@/images/Home/pro1.jpg'),
								proName: "V16系列-一开单控带五孔插座",
								size: "86mm*86mm",
								num: "100件/包"
							}, {
								id: 2,
								imgUrl: require('@/images/Home/pro2.jpg'),
								proName: "V16系列-四开双控",
								size: "86mm*86mm",
								num: "100件/包"
							}]
						}
					]
				}],
				newPro: [{
					title: "新品V19系列插座",
					proList: [{
						imgUrl: require('@/images/Home/pro3.jpg'),
						proName: "空白面板"
					}, {
						imgUrl: require('@/images/Home/pro4.jpg'),
						proName: "10A三插"
					}, {
						imgUrl: require('@/images/Home/pro5.jpg'),
						proName: "四位开关"
					}, {
						imgUrl: require('@/images/Home/pro6.jpg'),
						proName: "三位开关"
					}, {
						imgUrl: require('@/images/Home/pro7.jpg'),
						proName: "二位开关"
					}, {
						imgUrl: require('@/images/Home/pro8.jpg'),
						proName: "一位开关"
					}]
				}],
				explosion:[{
					title:"爆款纹理插座",
					proList: [{
						imgUrl: require('@/images/Home/pro9.jpg'),
						proName: "海外F8系列-木纹框组合01"
					}, {
						imgUrl: require('@/images/Home/pro10.jpg'),
						proName: "海外F8系列-木纹框组合02"
					}, {
						imgUrl: require('@/images/Home/pro11.jpg'),
						proName: "海外F8系列-木纹框组合03"
					}, {
						imgUrl: require('@/images/Home/pro12.jpg'),
						proName: "海外F8系列-青花框组合"
					}]
				}],
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					}
				}
			}
		}
	}
</script>
<style scoped>
	.Prolist {
		padding-bottom: 97px;
	}

	h2 {
		border-top: 10px solid #cccccc;
		font-size: 32px;
		color: #333;
		text-align: center;
		padding-top: 30px;
		margin-bottom: 20px;
	}

	.hot .proList {
		display: flex;
		padding: 0 24px;
	}

	.hot .proList li {
		width: 350px;
		height: auto;
		margin-right: 4px;
		text-align: center;
		margin-bottom: 33px;
	}

	.hot .proList li img {
		width: 348px;
		height: 348px;
		display: block;
		border: 1px solid #666666;
		/*no*/
		margin: 1px 0 0 1px;
	}

	.swiper-pagination-bullets {
		display: none;
	}

	.hot p {
		font-size: 24px;
		color: #333;
		margin: 10px 0 5px;
	}

	.hot span {
		margin-right: 28px;
		font-size: 24px;
		color: #666;
	}

	.hot b {
		font-size: 24px;
		color: #666;
	}

	.newPro {
		padding-bottom: 30px;
	}

	.newPro ul {
		display: flex;
		padding: 0 24px;

	}

	.newPro ul li {
		width: 98px;
		margin-right: 20px;
	}

	.newPro ul li img {
		width: 98px;
		height: 98px;
		border: 1px solid #666666;
		/*no*/
		margin-bottom: 10px;
	}

	.newPro h3 {
		color: #333333;
		font-size: 20px;
	}
	
	.explosion{
		padding: 0 20px;
	}
	
	.explosion ul{
		display: flex;
		flex-wrap: wrap;
	}
	
	.explosion ul li{
		width: 350px;
		height: auto;
		margin-right: 2px;
	}
	
	.explosion ul li img{
		width: 348px;
		height: 348px;
	}
	
	.explosion ul li h3{
		text-align: center;
		line-height: 52px;
	}
	
</style>
