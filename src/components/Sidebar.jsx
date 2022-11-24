import React, {useState, useEffect} from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';


const Sidebar = () => {

    const [ activeMenu, setActiveMenu ] = useState(true);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [screenSize, setScreenSize] = useState(undefined);

    const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
    const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-300 dark:hover:text-black hover:bg-light-gray m-2";

    
    
    
    
    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      if(screenSize <= 900){
        setActiveMenu(false);
      }else {
        setActiveMenu(true)
      }
    }, [screenSize]);

    
    
    
    const handleCloseSideBar = () => {
        if(activeMenu && screenSize <= 900){
          setActiveMenu(false);
        }
      }

    const links = [
        {
          title: 'User',
          links: [
            {
              links: 'dashboard/userlist',
              name: 'UserList',
              icon: <FiShoppingBag />,
            },
              {
                links: 'dashboard/create',
                name: 'createUser',
                icon: <FiShoppingBag />,
              },
          ]
        }
    ]

  return (
    <div className='h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 w-80'>
        <br />
        <br />
        <br />
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-black">
            <SiShopware /> <span>Dashboard</span>
          </Link>
          <div>
              <button type="button" onClick={() => setActiveMenu((false))} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block">
                <MdOutlineCancel />
              </button>
          </div>
        </div>
        <div className='mt-10'>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink 
                to={`/${link.links}`}
                key={link.name} 
                onClick={handleCloseSideBar} 
                className={({ isActive }) => isActive ? activeLink : normalLink }
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : ''
                })}
                >
                  {link.icon}
                  <span className='capitalize'>
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
      {activeMenu ? "" : <>
        <div className='mt-5 cursor-pointer' onClick={() => setActiveMenu(true)}>
          <GiHamburgerMenu size={30}/>
        </div></>}
    </div>
  )
}

export default Sidebar
