import { cn } from '@utils';

export const ResourceCard = ({ href, title, subtitle, tags = [], className, children }) => (
  <div
    className={cn(
      'group relative flex flex-col justify-between overflow-hidden rounded-xl',
      // light styles
      'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
      // dark styles
      'transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      className,
    )}
  >
    <a href={`/resources/${href}`}>
      <div className="flex flex-col items-center transition-all duration-300 group-hover:scale-110">
        <div className="py-12">{children}</div>
      </div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-5">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-md text-gray-500">{subtitle}</p>
        <div className="flex -mx-1">
          {tags.map((item) => (
            <div key={item} className="mx-1 px-2 border uppercase text-xs rounded-sm">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </a>
  </div>
);
