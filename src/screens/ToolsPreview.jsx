import { projects } from '@config';
import { BentoCard } from '@components';

export const ToolsPreview = () => (
  <div className="w-full p-0 md:p-8 my-24 overflow-visible">
    <div className="flex flex-col justify-center items-center space-y-2 mb-8">
      <p>TOOLS</p>
      <h3 className="text-3xl md:text-5xl text-center">
        Check out some of my <span className="text-5xl md:text-7xl font-curvy">tools</span> collection
      </h3>
      <p></p>
    </div>
    <div className="w-full auto-rows-[22rem] grid grid-cols-3 gap-4">
      {projects.map((p, idx) => (
        <BentoCard key={idx} {...p} />
      ))}
    </div>
  </div>
);
