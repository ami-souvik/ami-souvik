import { Home, About, Work, Blogs, Contact, LandingPageTemplate } from '@screens';

export const routes = [
	{
		href: '/',
		label: 'Home',
		component: Home
	},
	{
		href: '/about',
		label: 'About',
		component: About
	},
	{
		href: '/work',
		label: 'Work',
		component: Work
	},
	{
		href: '/stories',
		label: 'Stories',
		component: Blogs
	},
	{
		href: '/contact',
		label: 'Contact',
		component: Contact
	},
	{
		href: '/docs/react-vite-landing-page-bp',
		component: LandingPageTemplate
	},
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