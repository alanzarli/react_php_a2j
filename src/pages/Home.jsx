import React from 'react'
import HomeCard from '../components/HomeCard';
import Footer from '../components/Footer';
import Slider from '../components/Slider/Slider';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{ duration: 0.5 }}
    className='w-full bg-gray-100'>
        <Slider />
        <div className='text-black'>
            <h3 className='mt-10 text-gray-900 text-center font-bold text-xl'>ICI ON METTRA LE TEXTE DE PRESENTATION DE LA SOCIETE,</h3>
            <div className='text-gray-500 w-1/2 m-auto mt-10 text-center'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum id omnis quae perspiciatis placeat aliquid corporis ipsam doloribus totam ullam esse hic aperiam, enim qui. Excepturi ipsum quis mollitia eaque!
                Esse, veritatis dolorum. Molestias possimus ipsum fugit quos corporis ipsam impedit ipsa, consequuntur, atque, sed at magni odio saepe illum. Optio iusto aliquid corrupti inventore dolores id eos quia voluptatem.
                Ab possimus consequuntur necessitatibus odit et atque sint sequi facere dicta dolor, officia eius sapiente accusamus quam fuga? Beatae distinctio deleniti doloremque porro vero sint eligendi aliquid facilis maxime possimus.
                Deserunt totam quisquam doloremque at iure aliquam vel, cumque aut enim aspernatur natus sequi expedita! Quos, optio asperiores, repudiandae sed, enim omnis nam expedita voluptas dolorum fugiat maxime accusantium similique.
                </p>
                <p className='text-center text-black mt-5'>Vous souhaitez ameliorer votre confort et faire des economies d'energie ? Alors bienvenue chez <strong>A2J</strong> !</p>
            </div>
        </div>
        <HomeCard />
        <Footer />
    </motion.div>
  )
}

export default Home