import React from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Actualites = () => {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{ duration: 0.5 }}>
      <br />
      <br />
      <br />
        <iframe src="https://karlia.fr/app/external/forms/public.php?c=1752&id=19" width="100%" frameborder="0" height="1000px" title='karlia'></iframe>
        <Footer />
    </motion.div>
  )
}

export default Actualites
