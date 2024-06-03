import { Home, Resources, Tools } from '@screens';

export const routes = [
	{
		exact: true,
		href: '/',
		label: 'Home',
		component: Home,
		componentProps: {}
	},
	{
		exact: true,
		href: '/tools',
		label: 'Tools',
		component: Tools
	},
	{
		exact: false,
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