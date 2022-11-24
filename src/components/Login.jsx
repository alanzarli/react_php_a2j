import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';



const Login = () => {

    const [inputs, setInputs ] = useState([]);
    const nav = useNavigate();

    const handleChange = (event) => {
        const nom = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [nom]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        axios.get('http://localhost:8888/api/auth.php').then(function(response){
            if(inputs.email === response.data[0].email && inputs.password === response.data[0].password){
                nav('/dashboard');
            }
        });
    }
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{ duration: 0.5 }} 
    className='w-2/3 mx-auto'
    >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className='text-center text-4xl font-bold'>Log In</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
            
            <form  onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                    Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" name='email' type="text" placeholder="email" onChange={handleChange}/>
                </div>
                <div className="mb-6">
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="password" type="password" placeholder="******************" onChange={handleChange} />
                <p className="text-red text-xs italic">Please choose a password.</p>
                </div>
                <input type="submit" value="Login" className='p-3 bg-gray-600 text-white rounded-lg mx-auto hover:bg-gray-300 hover:text-gray-700 duration-150'/>
            </form>
    </motion.div>
  )
}

export default Login
