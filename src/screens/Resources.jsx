import { Countdown, ResourceUI, resources } from '@resources';
import { Drawer } from '@components';

export const Resources = () => {
  return (
    <div className="w-full p-8 overflow-auto">
      <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
        <Drawer items={resources} />
        <div className="flex flex-col items-start space-y-2">
          <ResourceUI title="Countdown">
            <Countdown />
          </ResourceUI>
        </div>
      </div>
    </div>
  );
};
