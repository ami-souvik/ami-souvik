import { forwardRef } from 'react';
import { Magnetic, Navigator, Title, ToggleMode } from '@components';

export const Header = forwardRef((props, ref) => {
  return (
    <div>
      <div className="w-full fixed top-0 px-6 md:px-12 items-center z-50 backdrop-blur-[5px]">
        <div className="w-full py-2 flex justify-between items-center border-b">
          <Title />
          <Navigator />
          <Magnetic ref={ref}>
            <ToggleMode />
          </Magnetic>
        </div>
      </div>
      <div className="h-[53px]" />
    </div>
  );
});
