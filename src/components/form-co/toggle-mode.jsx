import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useApp } from '@context';

export const ToggleMode = () => {
  const { mode, toggleMode } = useApp();
  return (
    <div
      className={`flex w-8 border rounded-xl p-0.5 ${mode === 'light' ? 'justify-start' : 'justify-end'}`}
      onClick={toggleMode}
    >
      <motion.div className="rounded-xl">
        {mode === 'light' ? <SunIcon color="black" /> : <MoonIcon color="white" />}
      </motion.div>
    </div>
  );
};
