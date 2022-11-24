import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';



const Update = () => {
  
    const navigate = useNavigate();
    const [ inputs, setInputs ] = useState([]);
    const {id} = useParams();


    function getUser() {
      axios.get(`http://localhost:8888/api/user/${id}`).then(function(response){
      console.log(response.data);
      setInputs(response.data[0]);
      
        })
    }

      useEffect(() => {
        getUser();

      }, [])

    const handleChange = (event) => {
        const nom = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [nom]: value}))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        axios.put(`http://localhost:8888/api/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
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
        <br />

        <Sidebar />
        <div className='mt-44 ml-24'>
            <h1 className='text-center'>Edit User</h1>
            <form  onSubmit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col ml-64">
                <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                    Nom
                </label>
                <input value={inputs.nom} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" name='nom' type="text" onChange={handleChange}/>
                </div>
                <div className="mb-6">
                <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                    Prenom
                </label>
                <input value={inputs.prenom} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" name='prenom' type="text" onChange={handleChange}/>
                </div>
                <div className="mb-6">
                <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                    Email
                </label>
                <input value={inputs.email} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" name='email' type="text" onChange={handleChange}/>
                </div>
                <div className="mb-6">
                <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                    Message
                </label>
                <input value={inputs.message} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" name='message' type="text" onChange={handleChange}/>
                </div>
                <input type="submit" value="Update" className='p-3 bg-gray-600 text-white rounded-lg mx-auto hover:bg-gray-300 hover:text-gray-700 duration-150'/>
            </form>
      
        </div>
    </motion.div>
       
  )
}

export default Update
