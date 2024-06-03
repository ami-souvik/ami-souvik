import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMediaQuery } from '@utils';

export const StickyCursor = ({ stickyElement }) => {
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 60 : 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, height, width } = stickyElement.current?.getBoundingClientRect() || {};

    //center position of the stickyElement
    const center = { x: left + width / 2, y: top + height / 2 };
    if (isHovered) {
      //distance between the mouse pointer and the center of the custom cursor and
      const distance = { x: clientX - center.x, y: clientY - center.y };
      //move mouse to center of stickyElement + slightly move it towards the mouse pointer
      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
    } else {
      //move custom cursor to center of stickyElement
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };
  const manageMouseOver = (e) => {
    setIsHovered(true);
    // stickyElement.current.style = 'transform: scale(3);';
  };

  const manageMouseLeave = (e) => {
    setIsHovered(false);
    // stickyElement.current.style = 'transform: none';
  };

  useEffect(() => {
    stickyElement.current?.addEventListener('mouseenter', manageMouseOver);
    stickyElement.current?.addEventListener('mouseleave', manageMouseLeave);
    window.addEventListener('mousemove', manageMouseMove);

    return () => {
      stickyElement.current?.removeEventListener('mouseenter', manageMouseOver);
      stickyElement.current?.removeEventListener('mouseleave', manageMouseLeave);
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, [isHovered]);
  if (mdw) return null;
  return (
    <div
      onMouseMove={manageMouseMove}
      style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: window.innerWidth,
        height: window.innerHeight,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <motion.div
        className="fixed bg-foreground dark:bg-foreground-dark"
        style={{
          width: cursorSize,
          height: cursorSize,
          borderRadius: '50%',
          pointerEvents: 'none',
          left: smoothMouse.x,
          top: smoothMouse.y,
          opacity: 0.3,
        }}
      ></motion.div>
    </div>
  );
};
