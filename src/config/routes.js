import { Home, Resources, ToolsPreview } from '@screens';

export const routes = [
	{
		href: '/',
		label: 'Home',
		component: Home
	},
	{
		href: '/tools',
		label: 'Tools',
		component: ToolsPreview
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