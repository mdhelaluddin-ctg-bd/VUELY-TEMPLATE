import Vue from 'vue'
import Router from 'vue-router'

//routes
import defaultRoutes from './default';
import horizontalRoutes from './horizontal';
import boxedRoutes from './boxed';
import mini from './mini';
import boxedV2 from './boxed-v2';

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		defaultRoutes,
		horizontalRoutes,
		boxedRoutes,
		mini,
		boxedV2
	]
})
