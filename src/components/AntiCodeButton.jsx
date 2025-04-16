import { motion } from 'framer-motion';

export default function AntiCodeButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0], backgroundColor: '#FF0055' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="px-6 py-3 rounded-full text-black font-bold bg-green-400"
    >
      Jangan Ngoding
    </motion.button>
  );
}
