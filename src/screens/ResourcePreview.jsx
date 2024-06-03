import { createElement } from 'react';
import { ResourceCard, resources } from '@resources';
import react from '@assets/react.png';
import tailwind from '@assets/tailwind.png';
import framerMotion from '@assets/framer-motion.png';

export const ResourcePreview = () => {
  return (
    <div className="w-full p-0 md:p-8 my-24 overflow-visible">
      <div className="flex flex-col justify-center items-center space-y-2 mb-8">
        <p>RESOURCES</p>
        <h3 className="text-3xl md:text-5xl text-center">
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
      <div className="w-full grid grid-cols-3 gap-4">
        {resources.map(({ component, ...props }, idx) => (
          <ResourceCard key={idx} className="col-span-3 md:col-span-1" {...props}>
            {createElement(component)}
          </ResourceCard>
        ))}
      </div>
    </div>
  );
};
