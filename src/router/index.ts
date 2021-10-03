import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import ProgramsPage from '../views/ProgramsPage.vue';
import NoticePage from '../views/NoticePage.vue';
const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/programme-page',
		name: 'ProgramsPage',
		component: ProgramsPage,
	},
	{
		path: '/notice-page',
		name: 'NoticePage',
		component: NoticePage,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
