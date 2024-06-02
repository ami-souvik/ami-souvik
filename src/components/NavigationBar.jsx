import { motion } from 'framer-motion';
import { Anchor, Magnetic } from '@components';
import { useRouter } from '@context';

export const NavigationBar = () => {
  const { state, routes } = useRouter();
  return (
    <div className="flex items-center space-x-1">
      {routes.map((route, index) => (
        <Anchor key={index} href={route.href}>
          <div className="relative">
            <Magnetic>
              <p className="text-xs md:text-base py-0.5 px-2 md:px-4 no-underline select-none">{route.label}</p>
            </Magnetic>
            {state.href === route.href && (
              <motion.div
                className="absolute top-0 right-0 bottom-0 left-0 bg-black dark:bg-white rounded-xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 0.1, y: 0 }}
              ></motion.div>
            )}
          </div>
        </Anchor>
      ))}
    </div>
  );
};
