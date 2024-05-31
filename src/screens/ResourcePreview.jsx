import { ResourceCard, resources } from '@resources';
import { createElement } from 'react';

export const ResourcePreview = () => {
  return (
    <div className="w-full p-0 md:p-8 overflow-auto">
      <div className="flex flex-col items-start space-y-2">
        <p>RESOURCES</p>
        <div className="w-full grid grid-cols-3 gap-4">
          {resources.map(({ title, subtitle, tags = [], component }) => (
            <ResourceCard title={title} subtitle={subtitle} tags={tags} className="col-span-3 md:col-span-1">
              {createElement(component)}
            </ResourceCard>
          ))}
        </div>
      </div>
    </div>
  );
};
