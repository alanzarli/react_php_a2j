import React from 'react';
import Energie from '../components/Energie';
import Footer from '../components/Footer';
import Travaux from '../components/Travaux';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{ duration: 0.5 }}
    className='bg-gray-300'>
        <Energie />
        <Travaux />
        <Footer />
    </motion.div>
  )
}

export default About
