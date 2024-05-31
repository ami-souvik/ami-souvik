import { useState } from 'react';

export const ResourceUI = ({ title, subtitle, children }) => {
  const [view, setView] = useState(false);
  return (
    <div className="w-full">
      <div className="py-4">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className="flex select-none">
        <div
          className={`py-1 px-4 border-black dark:border-white ${view ? 'border-b-2 font-bold' : ''}`}
          onClick={() => setView(true)}
        >
          Preview
        </div>
        <div
          className={`py-1 px-4 border-black dark:border-white ${!view ? 'border-b-2 font-bold' : ''}`}
          onClick={() => setView(false)}
        >
          Code
        </div>
      </div>
      <div className="border-y border-black dark:border-white flex flex-col items-center">
        <div className="py-12">{children}</div>
      </div>
    </div>
  );
};
