import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail,AiOutlineHome } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa'

const ContactInfo = () => {


    const socials = [
        {
            id: 1,
            child: (
                <>
                  <BsFillTelephoneFill size={60} className="text-blue-600 mx-auto mt-5"/>
                </>
            ),
            text: '09 09 09 09 09',
        },
        {
            id: 2,
            child: (
                <>
                 <AiOutlineMail size={60} className="text-green-600 mx-auto mt-5"/>
                </>
            ),
            text: 'mail@gmail.com',
        },
        {
            id: 3,
            child: (
                <>
                 <AiOutlineHome size={60} className="text-green-600 mx-auto mt-5"/>
                </>
            ),
            text: '13140, Miramas',
        },{
            id: 4,
            child: (
                <>
                 <FaLinkedin size={60} className="text-blue-600 mx-auto mt-5" />
                </>
            ),
            text: 'A2J Med',
        }
    ]
    



  return (

    <div>
      <h2 className='ml-64 text-4xl font-semibold'>Pour nous contacter c'est simple : </h2>
      <div className='mt-16 w-2/3 mx-auto min-w-fit'>
        <ul className='grid grid-rows-2 grid-cols-2 gap-4'>
            {socials.map(({id,child,text}) => (
                <li key={id} className="">
                    <div className='flex items-center'>
                        <div className='bg-gray-800 rounded-full w-24 h-24 cursor-pointer hover:scale-105 duration-200'>
                        {child} 
                        </div>
                        <h4 className='ml-5 font-semibold lg:text-xl text-sm'>{text}</h4>
                    </div>
                </li>
            ))}
        </ul>
      </div>
      <br />
      <br />
    </div>
  )
}

export default ContactInfo
