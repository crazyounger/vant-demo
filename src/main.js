import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import {Lazyload,Loading} from 'vant';

Vue.use(Lazyload).use(Loading)

Vue.config.productionTip = false

new Vue({
	router,
	el:'#app',
  render: h => h(App),
})
