import React from 'react';

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// Routing
import { Link } from 'react-router-dom';

// Component
import Quote from '../components/Quote';

const MainPage = () => {
  return (
    <motion.div
      initial={{
        x: '-200%',
        opacity: 0,
      }}
      animate={{
        x: '0%',
        opacity: 1,
      }}
      exit={{
        x: '-200%',
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}>
      <Link to="/authorQuotes" className="pt-[31px] px-[15px]">
        <Quote />
      </Link>
    </motion.div>
  );
};

export default MainPage;
