import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="flex items-center justify-center w-16 h-16 rounded-full bg-spinner"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <div className="bg-white rounded-full h-12 w-12"></div>
      </motion.div>
      <p className="text-red-700 ml-1">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
