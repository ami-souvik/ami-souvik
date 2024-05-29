import React from 'react';
import { Section, Title } from '@components';

export const Footer = () => {
  return (
    <div className="flex flex-col px-12 py-2">
      <Section className="border">
        <div>
          <Title />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="font-bold">Follow</p>
          <p>Figma</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>
      </Section>
      <p className=" pt-2 self-end">© 2024 flooke • All rights reserved</p>
    </div>
  );
};
