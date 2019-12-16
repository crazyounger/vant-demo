<template>
	<div id="#app">
		<transition name="router-fade" mode="out-in">
			<keep-alive>
				<router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
		</transition>
		<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {

		},
		data() {
			return {
				title: 'Vant Demo',
			}
		},
		methods: {
			onSearch() {
				// alert("onSearch")

			}
		}
	}
</script>

<style>
	body {
		height: 100vh;
		padding: 0;
		margin: 0;
	}
	
	#app{
		height: 100vh;
		background: #f0f3f6;
	}
	
	.router-fade-enter-active,
	.router-fade-leave-active {
		transition: opacity .3s;
	}

	.router-fade-enter,
	.router-fade-leave-active {
		opacity: 0;
	}
</style>
