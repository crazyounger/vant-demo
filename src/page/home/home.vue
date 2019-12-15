<template>
	<div class="home-container">
		<van-nav-bar 
			class="nav-bar"
			fixed>
			<label slot="title" class="nav-bar-title" >{{title}}</label>
		</van-nav-bar>
		
		
		<router-view></router-view>
		
		<van-tabbar v-model="tabActive" @change="onTabChange" route>
			<van-tabbar-item icon="home-o" replace to="/home/main">首页</van-tabbar-item>
			<van-tabbar-item icon="search" replace to="/home/search">搜索</van-tabbar-item>
			<van-tabbar-item icon="friends-o" info="3" replace to="/home/friends">联系人</van-tabbar-item>
			<van-tabbar-item icon="setting-o" replace to="/home/setting">设置</van-tabbar-item>
		</van-tabbar>
		
		
		
	</div>
	
	
</template>

<script>
	import {NavBar, Button , Icon , Tabbar,TabbarItem } from 'vant';
	
	const TAB_NAMES = ["首页","搜索","联系人","设置"];
	
	export default {
		name: 'home',
		components:{ 
			[Button.name]: Button,
			[NavBar.name]: NavBar,
			[Icon.name]:Icon,
			[Tabbar.name]: Tabbar,
			[TabbarItem.name]:TabbarItem,
		},
		data(){
			return {
				title: TAB_NAMES[0],
				tabActive: 0
			}
		},
		methods:{
			onTabChange(value){
				this.title = TAB_NAMES[value]
			}
		},
		mounted() {
			console.log(this.$route.meta.title)
			this.title = this.$route.meta.title
		}
	}
</script>

<style>
	.home-container{
		
	}
	
	.nav-bar{
		background: lightseagreen;
	}
	
	.nav-bar-title{
		color: #ffffff;
	}
</style>
