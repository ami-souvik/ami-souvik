import { useRouter } from '@context';

export const ResourceUI = ({ children }) => {
  const { state } = useRouter();
  return (
    <div className="w-full">
      <div className="py-4">
        <h3 className="text-3xl font-bold">{state.label}</h3>
      </div>
      <div className="border-y border-black dark:border-white flex flex-col items-center">
        <div className="py-12">{children}</div>
      </div>
    </div>
  );
};
