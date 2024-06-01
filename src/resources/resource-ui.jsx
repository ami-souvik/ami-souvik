import { useState } from 'react';

export const ResourceUI = ({ title, subtitle, children }) => (
  <div className="w-full">
    <div className="py-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      <p>{subtitle}</p>
    </div>
    <div className="border-y border-black dark:border-white flex flex-col items-center">
      <div className="py-12">{children}</div>
    </div>
  </div>
);
