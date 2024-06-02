import { Navigator, Title, ToggleMode } from '@components';

export const Header = () => (
  <div>
    <div className="fixed w-screen top-0 px-6 md:px-12 items-center z-50 backdrop-blur-[16px]">
      <div className="w-full py-2 flex justify-between items-center border-b">
        <Title />
        <Navigator />
        <ToggleMode />
      </div>
    </div>
    <div className="h-[53px]" />
  </div>
);
