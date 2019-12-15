import Vue from 'vue';
import Router from 'vue-router';
import home from '../page/home/home.vue'
import homeMain from '../page/home/main.vue'
import setting from '../page/home/setting.vue'
import friends from '../page/home/friends.vue'
import search from '../page/home/search.vue'

Vue.use(Router);

const routes = [
	{
		path:'/',
		redirect:'/home'
	},
	{
		path:'/home',
		component: home,
		children:[
		{
			path:'',
			redirect:'main',
		},
		{
			path:'main',
			component: homeMain,
			meta:{
				title:'首页'
			}
		},
		{
			
			path:'search',
			component: search,
			meta:{
				title:'搜索'
			}
		},
		{
			name:'friends',
			path:'friends',
			component: friends,
			meta:{
				title:'联系人'
			}
		},
		{
			name:'setting',
			path:'setting',
			component: setting,
			meta:{
				title:'设置'
			}
		}
	]
	}
]

const router = new Router({
	routes,
	mode:'hash'
})

router.beforeEach((to,from,next)=>{
	const title = to.meta && to.meta.title
	if(title){
		document.title =  title;
	}
	next();
})


export default router;