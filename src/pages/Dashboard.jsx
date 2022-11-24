import React from 'react'
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';


const Dashboard = () => {

  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{ duration: 0.5 }}>
      <Sidebar /> 
      
    </motion.div>
  )
}

export default Dashboard
