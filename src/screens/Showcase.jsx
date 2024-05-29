import { projects } from '@config';
import { BentoCard, Section } from '@components';

export const Showcase = () => {
  return (
    <Section className="auto-rows-[24rem]">
      <div className="auto-rows-[22rem] flex h-full flex-col justify-center space-y-2">
        <p>SHOWCASE</p>
        <h3 className="text-xl md:text-3xl">
          Explore my selected <span className="text-3xl md:text-5xl font-curvy">projects</span> with detailed
          information
        </h3>
        <p>
          Our team of skilled professionals specializes in full stack web development, delivering exceptional solutions
          tailored to your needs.
        </p>
      </div>
      {projects.map((p) => (
        <BentoCard {...p} />
      ))}
    </Section>
  );
};
