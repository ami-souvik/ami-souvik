import { Home, Resources } from '@screens';

export const routes = [
	{
		href: '/',
		label: 'Home',
		component: Home
	},
	{
		href: '/#about',
		label: 'About Me'
	},
	{
		href: '/resources',
		label: 'Resources',
		component: Resources
	}
];

export const getRouteIndex = (href) => {
	let index = -1
	routes.forEach((route, i) => {
		if(route.href === href) {
			index = i
		}
	})
	return index
}