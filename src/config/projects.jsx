import { GridPattern } from '@components';

const background = <GridPattern className="[mask-image:radial-gradient(320px_circle_at_center,white,transparent)]" />;

export const projects = [
  {
    name: 'Diagram IO',
    tags: ['design', 'development'],
    description: 'Search through all your files in one place.',
    href: 'https://www.tailwindgen.com',
    cta: 'Check in action',
    className: 'col-span-3 lg:col-span-1',
    background: <div></div>,
  },
  {
    name: 'This Page',
    tags: ['design', 'development'],
    description: 'Search through all your files in one place.',
    href: 'https://github.com/heres-sav/my-portfolio',
    cta: 'See the github repository',
    className: 'col-span-3 lg:col-span-1',
    background: <div></div>,
  },
];
