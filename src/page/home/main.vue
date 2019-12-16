<template>
	<div class="home-main-container">
		<van-swipe :height="340" :autoplay="3000" indicator-color="white" @change="onSwipeChange">
			<van-swipe-item v-for="(item,index) in bannerDatas" :key="index" @click="onSwipeItemClick">
				<van-image fit="cover" lazy-load :src="item" height="200" />
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem,
		Image,
	} from 'vant';

	export default {
		name: 'homeMain',
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[Image.name]: Image,
		},
		data() {
			return {
				bannerDatas: [
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576494615879&di=945745a946c21206cbf7db7e925a18db&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fc91303446e250d19972d2b72bf33727261ccc49b52cc0-l2hpy2_fw658",
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576494616603&di=744c09c0884eaa06804aa7861ae3a575&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd37164a8790552a9cc4e9626a5af6a659f20c4711f12b-sL48Lp_fw658",
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576494616603&di=20d10e0beb405aa9766ecf2d9993ccdd&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0152cf574518996ac72525ae8ed7a3.jpg",
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576494616602&di=f84a7d1f66372b7d4ab9b93bdf7aec74&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3e8dc579a835ed4945ccd025c700657f026208621af01-IK8J84_fw658"
				]
			}
		},
		methods: {
			onSwipeChange(value) {
				console.log(value)
			},
			onSwipeItemClick(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
	@import "../../style/common";

	.home-main-container {}
</style>
