import { useEffect } from 'react';
import p5 from 'p5';
import { useMediaQuery } from '@mui/material';
import { useApp } from '@context';
import { WaterRippleSketch } from './WaterRippleSketch';
import { MobileWaterRippleSketch } from './MobileWaterRippleSketch';

export const Canvas = () => {
  const {
    mode,
    section: { height: sectionHeight },
  } = useApp();
  const mdw = useMediaQuery((theme) => theme.breakpoints.down('md'));
  useEffect(() => {
    const sketch = new p5((p) =>
      mdw ? MobileWaterRippleSketch({ mode, sectionHeight, p }) : WaterRippleSketch({ mode, sectionHeight, p }),
    );
    return () => {
      sketch.remove();
    };
  }, [mdw, mode, sectionHeight]);
  return null;
};
