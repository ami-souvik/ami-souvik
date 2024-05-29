import { forwardRef } from 'react';
import { Magnetic, Navigator, Title, ToggleMode } from '@components';

export const Header = forwardRef((props, ref) => {
  return (
    <div className="px-12 items-center">
      <div className="w-full py-2 flex justify-between items-center border-b">
        <Title />
        <Navigator />
        <Magnetic ref={ref}>
          <ToggleMode />
        </Magnetic>
      </div>
    </div>
  );
});
