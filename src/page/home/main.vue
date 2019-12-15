<template>
	<div class="home-main-container">
		<van-swipe :height="240" :autoplay="3000" indicator-color="white" @change="onSwipeChange">
			<van-swipe-item v-for="(item,index) in bannerDatas" :key="index" @click="onSwipeItemClick">
				<img v-lazy="item">
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	import {Swipe, SwipeItem } from 'vant';
	
	export default {
		name:'homeMain',
		components:{
			[Swipe.name]:Swipe,
			[SwipeItem.name]:SwipeItem,
		},
		data(){
			return {
				bannerDatas:[
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576414181918&di=b0dfcf30cfd2adf294aa2e02324c791e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ff9844d5d9d27ed41c03c243468798bd4bc2112c25088-Yd3e3Z_fw658",
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576414181918&di=b0dfcf30cfd2adf294aa2e02324c791e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ff9844d5d9d27ed41c03c243468798bd4bc2112c25088-Yd3e3Z_fw658"
				]
			}
		},
		methods:{
			onSwipeChange(value){
				console.log(value)
			},
			onSwipeItemClick(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
	@import "../../style/common";
	.home-main-container {
		
	}
</style>
