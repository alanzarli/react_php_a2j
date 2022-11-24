import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';

const ListUsers = () => {

    const [ users, setUsers ] = useState([]);

   
        function getUsers() {
            axios.get('http://localhost:8888/api/users/').then(function(response){
            console.log(response.data);
            setUsers(response.data);
            
        })
    }
   
    useEffect(() => {
        getUsers();

    }, []);


   const deleteUser = (id) => {
    axios.delete(`http://localhost:8888/api/user/${id}/delete`).then(function(response){
        console.log(response.data);
        setUsers(response.data);
        window.location.reload();
    } )
   }
    

  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{ duration: 0.5 }}>
        <div className='flex w-full'>
        <Sidebar />
        <div className='mt-44 ml-24 md:ml-10 w-full'>
        <h1 className='text-4xl font-bold text-center'>Liste des utilisateurs</h1>
        <div className="flex flex-col w-full mx-auto mt-24">
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table className="min-w-full text-center">
                    <thead className="border-b bg-gray-800">
                        <tr>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            #
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            Nom
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            Prenom
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            Email
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            Message
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            Actions
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user, key) =>
                        <tr className="bg-white border-b" key={key}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.nom}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.prenom}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.message}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <Link to={`${user.id}/update`} style={{ marginRight: '10px', marginLeft: "10px"}} className='p-3 bg-black text-white rounded-lg mx-auto hover:bg-white hover:text-gray-700 duration-150'>edit</Link>
                            <button  className='p-3 bg-green-300 text-white rounded-lg mx-auto hover:bg-white hover:text-gray-700 duration-150' onClick={() => deleteUser(user.id)}>delete</button>
                        </td>
                        </tr>
                    )}

                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
        </div>
        
        </div>
        
    </motion.div>
  )
}

export default ListUsers
