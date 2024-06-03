import { Introduction } from "./introduction";
import { Countdown } from "./countdown";
import { Badge } from "./badge";

export const routes = [
    {
		exact: true,
		href: '/resources',
		label: 'Introduction',
		component: Introduction,
		componentProps: {}
	},
	{
		exact: true,
		href: '/resources/countdown',
		label: 'Countdown',
		component: Countdown,
		componentProps: {}
	},
	{
		exact: true,
		href: '/resources/badge',
		label: 'Badge',
		component: Badge,
		componentProps: {}
	}
]

export const resources = [
    {
        title: "Countdown",
        subtitle: "Just a silly rotating second clock",
        tags: ['simple', 'time'],
        component: Countdown,
        href: "countdown"
    },
    {
        title: "Badge",
        subtitle: "Just a silly rotating second clock",
        tags: ['simple', 'time'],
        component: Badge,
        href: "badge"
    }
]