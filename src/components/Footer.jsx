import React from 'react';
import { Title } from '@components';

export const Footer = () => {
  return (
    <div className="flex flex-col px-6 mb:px-12 py-3">
      <div className="grid w-full grid-cols-2 gap-4 my-2 p-4 md:p-8 border">
        <div>
          <Title />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="font-bold">Follow</p>
          <p>Figma</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>
      </div>
      <p className=" pt-2 self-end line-through">© 2024 flooke • All rights reserved</p>
    </div>
  );
};
