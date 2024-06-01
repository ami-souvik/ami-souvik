import { cn } from '@utils';

export const Button = ({ className, onClick, children }) => (
  <button className={cn('border rounded px-4', className)} onClick={onClick}>
    {children}
  </button>
);
