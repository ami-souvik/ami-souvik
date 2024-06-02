import { projects } from '@config';
import { BentoCard } from '@components';

export const Tools = () => (
  <div className="grid w-full grid-cols-2 gap-4 p-0 md:p-8 auto-rows-[24rem]">
    <div className="auto-rows-[22rem] col-span-2 md:col-span-1 flex h-full flex-col justify-center space-y-2">
      <p>SHOWCASE</p>
      <h3 className="text-3xl md:text-5xl">
        Explore my selected <span className="text-3xl md:text-5xl font-curvy">projects</span> with detailed information
      </h3>
      <p>
        Our team of skilled professionals specializes in full stack web development, delivering exceptional solutions
        tailored to your needs.
      </p>
    </div>
    {projects.map((p, idx) => (
      <BentoCard key={idx} {...p} />
    ))}
  </div>
);
