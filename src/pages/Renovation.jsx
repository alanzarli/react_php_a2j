import React from 'react';
import RenovationIntro from '../components/RenovationIntro';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Renovation = () => {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{ duration: 0.5 }} 
    className='w-full'
    >
       <RenovationIntro />
       <div className='mt-10'>
        <Footer />
       </div>
       
    </motion.div>
  )
}

export default Renovation
