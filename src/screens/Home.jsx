import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BorderBeam, DotPattern, Button } from '@components';
import { ResourcePreview, ToolsPreview } from '@screens';
import { cn } from '@utils';
import sav from '@assets/sav.jpg';
import figma from '@assets/figma.png';
import github from '@assets/github.png';

export const Home = (props) => {
  const { sectionRef } = props;
  return (
    <section ref={sectionRef}>
      <div className="h-full grid grid-cols-6 gap-4">
        <div className="col-span-6 row-span-1 md:row-span-3">
          <div className="flex flex-col items-center select-none px-0 md:px-6 py-0 md:py-12 space-y-4">
            <h1 className="text-6xl md:text-8xl text-center">
              A collection of tools and resources for{' '}
              <span className="text-7xl md:text-9xl font-curvy">developers</span>
            </h1>
            <div>
              <h2 className="text-md md:text-xl text-center font-light">
                2+ tools for different use cases.
                <ArrowForwardIcon fontSize="sm" />
              </h2>
              <h2 className="text-md md:text-xl text-center font-light">
                5+ UI design components for your web development.
                <ArrowForwardIcon fontSize="sm" />
              </h2>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 row-span-1 md:row-span-3 col-start-1">
          <div className="relative flex flex-col h-full w-full items-start justify-start overflow-hidden rounded-lg border bg-background dark:bg-background-dark p-8 md:shadow-xl">
            <p>AIM</p>
            <h3 className="text-xl md:text-3xl">
              Creating stunning websites that <span className="text-3xl md:text-5xl font-curvy">Stand Out</span>
            </h3>
            <DotPattern className={cn('[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]')} />
          </div>
        </div>
        <div className="flex justify-center col-span-6 md:col-span-2 row-span-1 md:row-span-3 col-start-1 mb:col-start-5 row-start-4 mb:row-start-4">
          <div className="w-full relative p-[32px] rounded-xl space-y-4 border md:shadow-xl z-10 overflow-hidden">
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
              <div className="flex space-x-2 py-1 px-2 border rounded">
                <img src={figma} alt="figma logo" style={{ width: '18px', objectFit: 'contain' }} />
                <p>Figma</p>
              </div>
              <div className="flex space-x-2 py-1 px-2 border rounded">
                <img src={github} alt="github logo" style={{ width: '20px', objectFit: 'contain' }} />
                <p>Github</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 row-span-1 md:row-span-2 col-start-1 md:col-start-4 row-start-5">
          <div className="relative flex flex-col h-full w-full items-start justify-center overflow-hidden rounded-lg border bg-background dark:bg-background-dark px-6 py-2 md:shadow-xl">
            <DotPattern className={cn('[mask-image:radial-gradient(120px_circle_at_center,white,transparent)]')} />
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 col-start-4 md:col-start-4 row-start-5 md:row-start-4 space-y-2">
          <Button className="w-full" onClick={() => window.open('https://github.com/heres-sav/my-portfolio', '_blank')}>
            <div className="flex space-x-2 my-2 justify-center items-center">
              <img src={github} alt="github logo" style={{ width: '24px', objectFit: 'contain' }} />
              <p>Star on Github</p>
              <ArrowForwardIcon fontSize="sm" />
            </div>
          </Button>
        </div>
      </div>
      <ToolsPreview />
      <ResourcePreview />
    </section>
  );
};
