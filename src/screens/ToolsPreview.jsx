import { projects } from '@config';
import { BentoCard } from '@components';

export const ToolsPreview = () => (
  <div className="w-full p-0 md:p-8 overflow-visible">
    <div className="w-full auto-rows-[22rem] grid grid-cols-3 gap-4">
      <div className="col-span-3 md:col-span-1 flex h-full flex-col justify-center space-y-2">
        <p>SHOWCASE</p>
        <h3 className="text-3xl md:text-5xl">
          Check out some of my selected <span className="text-5xl md:text-7xl font-curvy">tools</span>
        </h3>
        <p></p>
      </div>
      {projects.map((p, idx) => (
        <BentoCard key={idx} {...p} />
      ))}
    </div>
  </div>
);
