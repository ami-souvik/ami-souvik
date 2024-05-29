import { forwardRef } from 'react';

const Step = forwardRef(({ index, data: { media, title, subtitle } = {}, sx }, ref) => (
  <div className="flex flex-col items-start space-y-1">
    <div>
      <p className="text-4xl font-bold">{index}</p>
      <p className="text-2xl font-medium">{title}</p>
      <p>{subtitle}</p>
    </div>
  </div>
));

export const Steps = ({ data }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 px-6 py-8 border border-black">
      {data.map((item, idx) => (
        <Step key={idx} index={idx + 1} data={item} sx={{ marginTop: '12px', marginRight: '12px', width: '112px' }} />
      ))}
    </div>
  );
};
