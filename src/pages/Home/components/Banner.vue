<template>
	<div class="Banner">
		<swiper :options="swiperOption" ref="mySwiper">

			<!-- slides -->
			<swiper-slide v-for="item of List" :key="item.id">
				<router-link to="/ProDetails">
					<img :src="item.imgUrl" class="image-item">
				</router-link>
			</swiper-slide>

			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	export default {
		name: "Banner",
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				List: [{
					id: 1,
					imgUrl: require('@/images/banner1.jpg'),
					point: ""
				}, {
					id: 2,
					imgUrl: require('@/images/banner2.jpg'),
					point: ""
				}, {
					id: 3,
					imgUrl: require('@/images/banner3.jpg'),
					point: ""
				}],
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					},
					loop: true
				}
			}
		}
	}
</script>
<style scoped>
	img{
		width: 750px;
		height: 320px;
	}
	.Banner >>> .swiper-pagination-bullet{
		width: 10px;
		height: 10px;
		background: #FFFFFF;
		border-radius: 50%;
		border: 1px solid #333333;
	}
	.Banner >>> .swiper-pagination-bullet-active{
		background: #333333;
	}
</style>
