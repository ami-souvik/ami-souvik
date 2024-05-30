import { Section, BorderBeam, DotPattern, WordRotate } from '@components';
import { devProcess } from '@config';
import { Resources, Showcase } from '@screens';
import { cn } from '@utils';
import sav from '@assets/sav.jpg';
import react from '@assets/react.png';
import webflow from '@assets/webflow.png';
import tailwind from '@assets/tailwind.png';
import framer from '@assets/framer.png';
import figma from '@assets/figma.png';
import github from '@assets/github.png';
import threejs from '@assets/threejs.png';
import framerMotion from '@assets/framer-motion.png';

export const Home = (props) => {
  const { sectionRef } = props;
  return (
    <section ref={sectionRef}>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 md:col-span-3 row-span-1 md:row-span-3">
          <div className="flex flex-col justify-center select-none px-0 md:px-6 py-0 md:py-12 space-y-4">
            <div>
              <h1 className="text-3xl md:text-5xl">I will help you build the</h1>
              <h1 className="text-3xl md:text-5xl">
                platform of your <span className="text-5xl md:text-7xl font-curvy">dreams</span>
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl font-light">
              I'm a Freelance Professional working remotely from Kolkata, India.
            </h2>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 row-span-1 md:row-span-3 col-start-1 md:col-start-4">
          <div className="relative flex flex-col h-full w-full items-start justify-center overflow-hidden rounded-lg border bg-background p-8 md:shadow-xl">
            <DotPattern className={cn('[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]')} />
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 row-span-1 md:row-span-3 col-start-1 border p-8">
          <p>AIM</p>
          <h3 className="text-xl md:text-3xl">
            Creating stunning websites that <span className="text-3xl md:text-5xl font-curvy">Stand Out</span>
          </h3>
        </div>
        <div className="flex justify-center col-span-6 md:col-span-2 row-span-1 md:row-span-3 col-start-1 mb:col-start-5 row-start-4 mb:row-start-4">
          <div className="relative p-[32px] rounded-xl space-y-4 border md:shadow-xl z-10">
            <BorderBeam />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-[80px] h-[4px] bg-primary-main dark:bg-white rounded-xl" />
            </div>
            <div className="flex space-x-8 justify-between items-end">
              <p className="text-5xl md:text-7xl font-curvy">Sav</p>
              <img
                src={sav}
                alt="sav"
                style={{
                  height: '120px',
                  width: '100px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  border: '2px solid #fff',
                }}
              />
            </div>
            <hr className="opacity-[1]" />
            <div className="flex space-x-1 items-center">
              <img src={react} alt="react logo" style={{ width: '24px', objectFit: 'contain' }} />
              <img src={webflow} alt="webflow logo" style={{ width: '24px', objectFit: 'contain' }} />
              <img src={tailwind} alt="tailwindcss logo" style={{ width: '24px', objectFit: 'contain' }} />
              <img src={framer} alt="framer logo" style={{ width: '24px', objectFit: 'contain' }} />
            </div>
            <div className="flex space-x-1 items-center">
              <img src={figma} alt="figma logo" style={{ width: '24px', objectFit: 'contain' }} />
              <img src={github} alt="github logo" style={{ width: '24px', objectFit: 'contain' }} />
            </div>
            <div className="flex space-x-1 items-center">
              <div className="p-0.5 bg-white rounded">
                <img src={threejs} alt="threejs logo" style={{ width: '20px', objectFit: 'contain' }} />
              </div>
              <img src={framerMotion} alt="framer motion logo" style={{ width: '20px', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 row-span-1 md:row-span-2 col-start-1 md:col-start-4 row-start-5">
          <div className="relative flex flex-col h-full w-full items-start justify-center overflow-hidden rounded-lg border bg-background px-6 py-2 md:shadow-xl">
            <WordRotate
              words={devProcess.map(({ title, subtitle }, index) => (
                <div className="space-y-2">
                  <p className="text-6xl font-light">{index + 1}</p>
                  <p className="text-4xl font-medium">{title}</p>
                  <p className="text-xl font-light">{subtitle}</p>
                </div>
              ))}
            />
            <DotPattern className={cn('[mask-image:radial-gradient(120px_circle_at_center,white,transparent)]')} />
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 col-start-4 md:col-start-4 row-start-5 md:row-start-4 space-y-2">
          <p className="text-xl font-bold">flooke</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <Showcase />
      <Resources />
      <Section className="border">
        <div className="space-y-2">
          <p>CONNECT</p>
          <h3 className="text-xl md:text-3xl font-bold">Get in Touch</h3>
          <p>I'd love to hear from you, for any inquiries or collaborations.</p>
        </div>
        <div className="space-y-4" spacing={1}>
          <p className="font-bold">Email</p>
          <a href="mailto:dsouvik141@gmail.com" className="underline underline-offset-4">
            <p>dsouvik141@gmail.com</p>
          </a>
          <p className="font-bold">Phone</p>
          <a href="tel:919062786568" className="underline underline-offset-4">
            <p>+91-9062786568</p>
          </a>
        </div>
      </Section>
    </section>
  );
};
