import { createElement } from 'react';
import { ResourceCard, resources } from '@resources';
import react from '@assets/react.png';
import webflow from '@assets/webflow.png';
import tailwind from '@assets/tailwind.png';
import framer from '@assets/framer.png';
import figma from '@assets/figma.png';
import github from '@assets/github.png';
import threejs from '@assets/threejs.png';
import framerMotion from '@assets/framer-motion.png';

export const ResourcePreview = () => {
  return (
    <div className="w-full p-0 md:p-8 overflow-visible">
      <div className="w-full grid grid-cols-3 gap-4">
        <div className="auto-rows-[22rem] col-span-3 md:col-span-1 flex h-full flex-col justify-center space-y-2">
          <p>RESOURCES</p>
          <h3 className="text-xl md:text-3xl">A few open-source UI elements</h3>
          <p className="flex space-x-1">
            <img src={react} alt="react logo" style={{ width: '18px', objectFit: 'contain' }} />
            <p>React,</p>
            <img src={tailwind} alt="tailwindcss logo" style={{ width: '18px', objectFit: 'contain' }} />
            <p>Tailwind CSS, and</p>
            <img src={framerMotion} alt="framer motion logo" style={{ width: '16px', objectFit: 'contain' }} />
            <p>Framer Motion</p>
          </p>
        </div>
        {resources.map(({ title, subtitle, tags = [], component }) => (
          <ResourceCard title={title} subtitle={subtitle} tags={tags} className="col-span-3 md:col-span-1">
            {createElement(component)}
          </ResourceCard>
        ))}
      </div>
    </div>
  );
};
