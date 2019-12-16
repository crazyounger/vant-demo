<template>
	<div class="home-main-container">
		<van-swipe :height="200" :autoplay="3000" indicator-color="white" @change="onSwipeChange">
			<van-swipe-item v-for="(item,index) in bannerDatas" :key="index" @click="onSwipeItemClick">
				<van-image fit="cover" lazy-load :src="item" height="200" />
			</van-swipe-item>
		</van-swipe>
		<div class="widget-container">
			<van-button type="default" size="large">默认button</van-button>
			<van-button :type="btnType" plain size="small">小button</van-button>
			<van-button disabled size="small" type="primary" round  :loading="isLoading" loading-text="加载中...">小button</van-button>
			<van-button block type="primary" round  :loading="isLoading" loading-text="加载中...">小button</van-button>
		</div>
		<div class="widget-container">
			<van-cell-group style="background: #ffffff;" title="分组1">
				<van-cell title="单元格" value="这里是内容" is-link @click="showPopup"/>
				<van-cell title="单元格" value="这里是很多的内容,不知道能不能显示下,我就测试一下吧" label="描述信息,如果有很多的描述信息呢" />
				<van-cell title="单元格" value="2222" is-link icon="shop-o" to="search"/>
			</van-cell-group>
		</div>
		<div class="widget-container">
			<van-popup v-model="show">
				<div class="popup-container">
					<div class="popup-header">
						这里是header
					</div>
					<div class="popup-content">
						这里是content内容
					</div>
					<div class="popup-footer">
						这是里footer
					</div>
				</div>
			</van-popup>
		</div>
	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem,
		Image,
		Button,
		Cell,
		CellGroup,
		Popup,
	} from 'vant';

	export default {
		name: 'homeMain',
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[Image.name]: Image,
			[Button.name]: Button,
			[Cell.name]:Cell,
			[CellGroup.name]:CellGroup,
			[Popup.name]: Popup,
		},
		data() {
			return {
				bannerDatas: [
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576494615879&di=945745a946c21206cbf7db7e925a18db&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fc91303446e250d19972d2b72bf33727261ccc49b52cc0-l2hpy2_fw658",
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576494616603&di=744c09c0884eaa06804aa7861ae3a575&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd37164a8790552a9cc4e9626a5af6a659f20c4711f12b-sL48Lp_fw658",
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576494616603&di=20d10e0beb405aa9766ecf2d9993ccdd&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0152cf574518996ac72525ae8ed7a3.jpg",
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576494616602&di=f84a7d1f66372b7d4ab9b93bdf7aec74&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3e8dc579a835ed4945ccd025c700657f026208621af01-IK8J84_fw658"
				],
				btnType:'warning',
				isLoading:false,
				show:true
			}
		},
		methods: {
			onSwipeChange(value) {
				console.log(value)
			},
			onSwipeItemClick(e) {
				console.log(e)
			},
			showPopup(){
				this.show = !this.show ;
			}
		}
	}
</script>

<style lang="scss">
	@import "../../style/common";

	.home-main-container {
		
		.widget-container{
			padding: 10px;
		}
	}
	
	.popup-container{
		min-width: 300px;
		max-width:500px;
		min-height: 200px;
		
		div{
			width: 100%;
		}
	}
</style>
