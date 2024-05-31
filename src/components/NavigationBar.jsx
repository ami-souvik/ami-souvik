import { motion } from 'framer-motion';
import { Magnetic } from '@components';

export const NavigationBar = ({ state, routes, click }) => {
  return (
    <div className="flex items-center space-x-1">
      {routes.map((route, index) => (
        <div key={index} className="relative">
          <Magnetic>
            <a href={route.href} onClick={(e) => click(e, route.href)}>
              <p className="text-xs md:text-base py-0.5 px-2 md:px-4 no-underline select-none">{route.label}</p>
            </a>
          </Magnetic>
          {state.href === route.href && (
            <motion.div
              className="absolute top-0 right-0 bottom-0 left-0 bg-[#0001] rounded-xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
            ></motion.div>
          )}
        </div>
      ))}
    </div>
  );
};
