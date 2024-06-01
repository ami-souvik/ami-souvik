import { useId } from 'react';
import { motion } from 'framer-motion';
import { BellIcon } from '@radix-ui/react-icons';

export const Badge = ({ label = 'NOTIFICATION | NOTIFICATION | NOTIFICATION', size = 160, radius = 60 }) => {
  const id = useId();
  const badgePathId = `${id}-path`;
  return (
    <div className="relative rounded-6xl">
      <motion.div
        className="p-1 rounded-6xl"
        style={{ width: size, height: size }}
        animate={{
          rotate: 360,
        }}
        transition={{ repeat: Infinity, ease: 'easeInOut', duration: 4 }}
      >
        <div className="rounded-6xl">
          <svg viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
            <path
              id={badgePathId}
              /*
              M (CENTER_X - RADIUS), CENTER_Y
              a RADIUS,RADIUS 0 1,1 (2 * RADIUS),0
              RADIUS,RADIUS 0 1,1 (-2 * RADIUS),0
              */
              d={`M ${size / 2 - radius}, ${size / 2}
              a ${radius},${radius} 0 1,1 ${2 * radius},0
              ${radius},${radius} 0 1,1 -${2 * radius},0`}
              fill="transparent"
            ></path>
            <text>
              <textPath className="text-md text-black dark:text-white" href={`#${badgePathId}`}>
                {label}
              </textPath>
            </text>
          </svg>
        </div>
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <BellIcon className="w-12 h-12" />
      </div>
    </div>
  );
};
