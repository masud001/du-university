import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import ProgramsPage from '../views/ProgramsPage.vue';
import NoticesPage from '../views/NoticesPage.vue';
import ChairpersonsNote from '../views/ChairpersonsNote.vue';
import MissionPage from '../views/MissionPage.vue';
import OverviewPage from '../views/OverviewPage.vue';
import SingleNoticePage from '../views/SingleNoticePage.vue';
import ResultPage from '../views/ResultPage.vue';
import RoutinePage from '../views/RoutinePage.vue';
import SingleStaffPage from '../views/SingleStaffPage.vue';
import AllStuffPage from '../views/AllStuffPage.vue';
const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/programme',
		name: 'ProgramsPage',
		component: ProgramsPage,
	},
	{
		path: '/notices',
		name: 'NoticesPage',
		component: NoticesPage,
	},
	{
		path: '/academic',
		name: 'ChairpersonsNote',
		component: ChairpersonsNote,
	},
	{
		path: '/mission',
		name: 'MissionPage',
		component: MissionPage,
	},
	{
		path: '/overview',
		name: 'OverviewPage',
		component: OverviewPage,
	},
	{
		path: '/notice',
		name: 'SingleNoticePage',
		component: SingleNoticePage,
	},
	{
		path: '/result',
		name: 'ResultPage',
		component: ResultPage,
	},
	{
		path: '/routine',
		name: 'RoutinePage',
		component: RoutinePage,
	},
	{
		path: '/staff',
		name: 'SingleStaffPage',
		component: SingleStaffPage,
	},
	{
		path: '/all-staff',
		name: 'AllStuffPage',
		component: AllStuffPage,
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
