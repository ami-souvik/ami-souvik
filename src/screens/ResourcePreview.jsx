import { createElement } from 'react';
import { ResourceCard, resources } from '@resources';
import react from '@assets/react.png';
import tailwind from '@assets/tailwind.png';
import framerMotion from '@assets/framer-motion.png';

export const ResourcePreview = () => {
  return (
    <div className="w-full p-0 md:p-8 overflow-visible">
      <div className="w-full grid grid-cols-3 gap-4">
        <div className="auto-rows-[22rem] col-span-3 md:col-span-1 flex h-full flex-col justify-center space-y-2">
          <p>RESOURCES</p>
          <h3 className="text-3xl md:text-5xl">
            A few open-source UI <span className="text-5xl md:text-7xl font-curvy">resources</span>
          </h3>
          <p className="flex space-x-1 flex-wrap">
            <p>Built with </p>
            <img src={react} alt="react logo" style={{ width: '18px', objectFit: 'contain' }} />
            <p>React,</p>
            <img src={tailwind} alt="tailwindcss logo" style={{ width: '18px', objectFit: 'contain' }} />
            <p>Tailwind CSS, and</p>
            <img src={framerMotion} alt="framer motion logo" style={{ width: '16px', objectFit: 'contain' }} />
            <p>Framer Motion</p>
          </p>
        </div>
        {resources.map(({ component, ...props }, idx) => (
          <ResourceCard key={idx} className="col-span-3 md:col-span-1" {...props}>
            {createElement(component)}
          </ResourceCard>
        ))}
      </div>
    </div>
  );
};
