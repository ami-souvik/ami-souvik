import { useEffect } from 'react';
import p5 from 'p5';
import { useApp } from '@context';
import { WaterRippleSketch } from './WaterRippleSketch';

export const Canvas = () => {
  const {
    mode,
    section: { height: sectionHeight },
  } = useApp();
  useEffect(() => {
    const sketch = new p5((p) => WaterRippleSketch({ mode, sectionHeight, p }));
    return () => {
      sketch.remove();
    };
  }, [mode, sectionHeight]);
  return null;
};
