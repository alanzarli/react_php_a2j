import React from 'react';
import renov from '../assets/renovation.jpg';
import { GiSolarPower, GiEcology, GiMoneyStack } from "react-icons/gi";



const RenovationIntro = () => {
  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> 
        <h3 className='text-3xl font-bold text-gray-700 text-center'>Rénovations</h3>
        <div className='w-full flex justify-around items-start flex-wrap sm:flex-nowrap mt-24 sm:mt-5 '>
            <div className='font-light text-xl text-gray-900 md:text-center w-full text-center'>
                <div className='mx-10 mt-24 '>
                    <p>
                    Enim beatae magnam error consectetur, dolorem dolores minus. Nisi unde eligendi labore cumque illum quod nesciunt a sed ducimus, delectus odit eveniet, voluptates accusantium sit, sequi illo sint autem veritatis.,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, assumenda,
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, assumenda,
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, assumenda.</p>
                </div>
                <div className='flex justify-center gap-10 mt-5'>
                    <button className='bg-white hover:bg-green-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow min-w-fit'>Estimez vos travaux</button>
                    <button className='bg-white hover:bg-green-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow '>Contacter un profesionnelle</button>
                </div>
                <div className='w-full  mt-32 bg-gray-200  rounded-full lg:ml-6 sm:ml-0'>

                    <div className='flex justify-evenly items-center h-44 w-full mt-24'>
                        <div className='flex flex-col justify-center items-center bg-blue-500 rounded-lg w-1/4 cursor-pointer hover:scale-105 duration-200'>
                            <GiSolarPower size={80} color="lightgreen" />
                            <p className='text-sm text-white font-medium'>Passez aux solaire !</p>
                        </div>
                        <div className='flex flex-col justify-center items-center bg-blue-500 w-1/4 rounded-lg cursor-pointer hover:scale-105 duration-200'>
                            <GiEcology size={80} color="lightgreen" />
                            <p className='text-sm text-white font-medium'>Faites du bien a votre planet</p>
                        </div>
                        <div className='flex flex-col justify-center items-center bg-blue-500 w-1/4 rounded-lg cursor-pointer hover:scale-105 duration-200'>
                            <GiMoneyStack size={80} color="lightgreen" />
                            <p className='text-sm text-white font-medium'>Des aides financières</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className='mt-10 w-full'>
                <img src={renov} alt="eee" className='mx-auto rounded-xl border-green-400 border-8 p-1 shadow-lg shadow-black'  />
            </div>
        </div>
    </div>
  )
}

export default RenovationIntro
