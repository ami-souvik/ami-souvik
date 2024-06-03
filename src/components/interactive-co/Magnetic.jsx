import { forwardRef, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@utils';

export const Magnetic = forwardRef(({ offset = 20, children }, ref) => {
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const magneticRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = magneticRef.current.getBoundingClientRect();
    const cursorX = clientX - (left + width / 2);
    const cursorY = clientY - (top + height / 2);
    setPosition({ x: (cursorX * offset) / width, y: (cursorY * offset) / height });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  if (mdw) return children;
  return (
    <motion.div
      style={{ position: 'relative' }}
      ref={magneticRef}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <div
        style={{
          display: 'flex',
          gap: 8,
          flexDirection: 'column',
          pointerEvents: 'all',
          '&::before, &::after': {
            display: 'block',
            content: '',
            width: 30,
            mixBlendMode: 'difference',
            backgroundColor: 'white',
          },
        }}
      >
        <div
          ref={ref}
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            ...(hovered && {
              transform: 'scale(3)',
            }),
            zIndex: 99,
            // border: '1px solid red',
          }}
        ></div>
        {children}
      </div>
    </motion.div>
  );
});
