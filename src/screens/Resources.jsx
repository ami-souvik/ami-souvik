import { Clock, ResourceUI } from '@resources';

export const Resources = () => {
  return (
    <div className="w-full p-8 overflow-auto">
      <div className="flex flex-col items-start space-y-2">
        <ResourceUI title="Clock">
          <Clock />
        </ResourceUI>
      </div>
    </div>
  );
};
