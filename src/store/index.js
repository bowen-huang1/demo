import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		type: [{
			id: 1,
			title: "地狱F4地插系列-硅头螺栓",
			price: 99.99
		}, {
			id: 2,
			title: "地狱H4地插系列-硅头螺栓",
			price: 189
		}, {
			id: 3,
			title: "地狱Y4地插系列-硅头螺栓",
			price: 199
		}],
		addCartNum: 0
	},
	mutations: {
		add(number){
			console.log(number)
			// return number++
		},
		reduce(state){
			// if(number>1){
			// 	return number--
			// }else{
			// 	return number = 1
			// }
		},
	}
})
