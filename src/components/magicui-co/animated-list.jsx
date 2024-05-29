import { memo, useEffect, useMemo, useState, Children } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const AnimatedListItem = ({ iscol, children }) => {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, ...(iscol ? { originY: 0 } : { originX: 0 }) },
    exit: { scale: 0, opacity: 0 },
    transition: { type: 'spring', stiffness: 350, damping: 40 },
  };
  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
};

export const AnimatedList = memo(({ className, children, direction = 'column', reverse, delay = 1000 }) => {
  const iscol = direction === 'column';
  const [index, setIndex] = useState(0);
  const childrenArray = Children.toArray(children);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
    }, delay);

    return () => clearInterval(interval);
  }, [childrenArray.length, delay]);

  const itemsToShow = useMemo(() => {
    return reverse ? childrenArray.slice(0, index + 1) : childrenArray.slice(0, index + 1).reverse();
  }, [index, childrenArray]);

  return (
    <div className={`w-full flex ${iscol ? 'flex-col' : 'flex-row'} items-center gap-4 ${className}`}>
      <AnimatePresence>
        {itemsToShow.map((item) => (
          <AnimatedListItem key={item.key} iscol={iscol}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
});

AnimatedList.displayName = 'AnimatedList';
