import { cn } from '@utils';

export const Button = ({ className, onClick, children }) => (
  <button
    className={cn('rounded-xl py-2 px-4 bg-black text-white', 'dark:bg-white dark:text-black', className)}
    onClick={onClick}
  >
    {children}
  </button>
);
