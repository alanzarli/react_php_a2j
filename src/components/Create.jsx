import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';



const Create = () => {
  
    const navigate = useNavigate();
    const [ inputs, setInputs ] = useState({});

    const handleChange = (event) => {
        const nom = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [nom]: value}))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        axios.post('http://localhost:8888/api/user/save', inputs).then(function(response){
            navigate('/dashboard');
        });

    }

  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{ duration: 0.5 }}
    className='flex'>
        <br />
        <Sidebar />
        <div className='mt-44 ml-24'>
            <h1 className='text-center'>Create Users</h1>
            <form className='' onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th className='p-3'>
                                <label htmlFor="nom">Nom</label>
                            </th>
                            <td>
                                <input type="text" name='nom' className='bg-gray-300' onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th className='p-3'>
                                <label htmlFor="prenom">Prenom</label>
                            </th>
                            <td>
                                <input type="text" name='prenom' className='bg-gray-300' onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th className='p-3'>
                                <label htmlFor="email">email</label>
                            </th>
                            <td>
                                <input type="text" name='email' className='bg-gray-300' onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th className='p-3'>
                                <label htmlFor="message">message</label>
                            </th>
                            <td>
                                <input type="text" name='message' className='bg-gray-300' onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className='bg-gray-300 relative left-44'>create</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
        
      
    </motion.div>
  )
}

export default Create
