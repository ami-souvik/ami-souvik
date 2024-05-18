import { forwardRef, useRef } from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import { AnimatedBeam } from '@components';

const Step = forwardRef(({ data: { media, subtitle } = {}, sx }, ref) => {
  const theme = useTheme();
  return (
    <Stack spacing={1} alignItems="flex-start" sx={{ ...sx }}>
      <div ref={ref} className="p-[12px] bg-primary-main rounded-xl shadow-lg">
        <img src={media} style={{ width: '24px' }} />
      </div>
      <Typography lineHeight="1.2rem" fontWeight={600}>
        {subtitle}
      </Typography>
    </Stack>
  );
});

export const Steps = ({ data }) => {
  const size = data.length;
  const containerRef = useRef(null);
  const stepsRef = data.map(() => useRef(null));
  return (
    <div className="relative flex w-full flex-wrap flex-row justify-between" ref={containerRef}>
      {data.map((item, index) => (
        <Step
          key={index}
          ref={stepsRef[index]}
          data={item}
          sx={{ marginLeft: '24px', marginTop: '24px', width: '112px' }}
        />
      ))}
      {stepsRef.map((v, index) =>
        index === stepsRef.length - 1 ? (
          <></>
        ) : (
          <AnimatedBeam
            duration={10}
            containerRef={containerRef}
            fromRef={stepsRef[index]}
            toRef={stepsRef[index + 1]}
          />
        ),
      )}
    </div>
  );
};
