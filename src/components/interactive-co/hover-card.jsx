import { cn } from '@utils';

export const HoverCard = ({ href = '#', className, children }) => (
  <a href={href} target="_blank" rel="noreferrer" className={cn('group relative block', className)}>
    <span className="absolute inset-0 border-2 border-dashed border"></span>
    <div className="relative flex h-full transform border-2 border transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
      <div className="px-8 py-4">{children}</div>
    </div>
  </a>
);
