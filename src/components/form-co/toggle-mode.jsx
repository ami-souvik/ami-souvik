import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useApp } from '@context';

export const ToggleMode = () => {
  const { toggleMode } = useApp();
  const mode = useSelector((state) => state.config.theme.mode);
  return (
    <div
      className={`flex w-8 border rounded-xl p-0.5 ${mode === 'light' ? 'justify-start' : 'justify-end'}`}
      onClick={toggleMode}
    >
      <motion.div className="rounded-xl">
        {mode === 'light' ? <SunIcon fill="black" /> : <MoonIcon fill="white" />}
      </motion.div>
    </div>
  );
};
