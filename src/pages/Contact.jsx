import React from 'react'
import NavBar from '../components/NavBar';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
import Map from '../components/Map/Map';
import {motion} from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{ duration: 0.5 }}
    className='bg-gray-300'
    >
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ContactInfo />
      <br />
      <Map />
      <Footer />
    </motion.div>
  )
}

export default Contact
