import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="flex items-center justify-center w-20 h-20 rounded-full bg-spinner"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <div className="bg-white rounded-full h-14 w-14"></div>
      </motion.div>
      <p className="text-red-700 text-sm mt-2">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
