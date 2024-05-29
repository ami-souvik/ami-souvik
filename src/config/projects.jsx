import { GridPattern } from '@components';

const background = <GridPattern className="[mask-image:radial-gradient(320px_circle_at_center,white,transparent)]" />;

export const projects = [
  {
    name: 'Bento Grid Generator',
    tags: ['design', 'development', 'tailwind'],
    description: 'Search through all your files in one place.',
    href: 'https://www.tailwindgen.com',
    cta: 'Check in action',
    className: 'col-span-3 lg:col-span-1',
    background,
  },
  {
    name: 'Landing Page Boilerplate',
    tags: ['design', 'development'],
    description: 'Search through all your files in one place.',
    href: 'https://react-vite-landing-page-bp.vercel.app',
    cta: 'See the case study',
    className: 'col-span-3 lg:col-span-1',
    background,
  },
  {
    name: 'Sephirah Innovations Landing Pag',
    tags: ['design', 'development'],
    description: 'Search through all your files in one place.',
    href: 'https://www.sephirahinnovations.com',
    cta: 'See the case study',
    className: 'col-span-3 lg:col-span-1',
    background,
  },
];
