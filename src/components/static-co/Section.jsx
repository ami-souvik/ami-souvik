import { useMediaQuery } from '@mui/material';
import { cn } from '@utils';

export const Section = ({ className, children }) => {
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const spacing = mdw ? 2 : 4;
  const size = children.length || 1;
  return <div className={cn(`grid w-full grid-cols-2 gap-4 p-8`, className)}>{children}</div>;
};
