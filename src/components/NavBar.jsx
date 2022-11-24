import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from  '../assets/logo_footer.png';

const NavBar = () => {

    const [nav, setNav ] = useState(false);

    const links = [
        {
            id: 1,
            title: 'Home',
            link: '/pages/home',
        },
        {
            id: 2,
            title: 'A propos',
            link: '/pages/about',
        },
        {
            id: 3,
            title: 'Rénovations',
            link: 'pages/renovation',
        },
        {
            id: 4,
            title: 'Mon devis',
            link: '/pages/actualites',
        },
        {
            id: 5,
            title: 'Contact',
            link: '/pages/contact',
        }
    ]

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-blue-600 fixed px-4 z-50 rounded-b-md">
        <div>
            <img src={logo} alt="logo_a2j" className="m-auto rounded p-5" height="50px" width='200px' />
        </div> 
        <ul className="hidden md:flex">
        {links.map(({id, link, title}) => (
            <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200">
                <NavLink to={link}>{title}</NavLink>
            </li>
        ))}   
        </ul>
        <div  onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
            {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                {links.map(({id, link, title}) => (
                    <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                        <NavLink onClick={() => setNav(!nav)} to={link}>{title}</NavLink>
                    </li>
                ))}   
            </ul>
            )}
    </div>
  )
}

export default NavBar
