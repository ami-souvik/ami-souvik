import { HoverCard } from '@components';

export const Resources = () => {
  return (
    <div className="w-full p-8 overflow-auto">
      <div className="flex flex-col items-start space-y-2">
        <p>RESOURCES</p>
        <div className="flex flex-wrap">
          <HoverCard href="https://www.hyperui.dev/" className="w-64">
            <p className="text-2xl font-bold">HyperUI</p>
            <p>Free Open Source Tailwind CSS Components</p>
          </HoverCard>
          <HoverCard href="https://magicui.design/" className="w-64">
            <p className="text-2xl font-bold">Magic UI</p>
            <p>UI library for Design Engineers</p>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};
