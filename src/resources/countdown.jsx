import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Rotate = ({
  label,
  value,
  transition = { duration: 0.25, ease: 'easeOut' },
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  },
}) => (
  <div>
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={value} transition={transition} {...framerProps}>
          <div className="h-20 md:h-24 w-20 md:w-24 flex justify-center items-center text-5xl md:text-6xl">
            {String(value).padStart(2, '0')}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
    <div className="px-4 text-xs uppercase">{label}</div>
  </div>
);

export const Countdown = () => {
  const [time, setTime] = useState(7200);
  const timeout = setTimeout(() => {
    setTime(time - 1);
  }, 1000);
  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="p-2 flex items-center border border-black dark:border-white rounded-xl">
      <Rotate label="hours" value={Math.floor(time / 3600)} />
      <div className="text-4xl md:text-6xl">:</div>
      <Rotate label="minutes" value={Math.floor((time / 60) % 60)} />
      <div className="text-4xl md:text-6xl">:</div>
      <Rotate label="seconds" value={time % 60} />
    </div>
  );
};
