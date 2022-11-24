import React from 'react';
import chauffage from '../assets/imgAbout/radiateur-electrique.jpeg';
import isolation from '../assets/imgAbout/isolation.jpeg';
import pompe from '../assets/imgAbout/pompe.webp';

const Travaux = () => {


const travauxData = [
    {
        id: 9,
        title: "Changez de chauffage",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fuga earum neque amet nemo? Ut maxime dolor dolorem hic tempora esse magnam amet ullam? Laboriosam ut amet facere sapiente voluptate!",
        img: chauffage,
    },
    {
        id: 8,
        title: "Isolez votre maison",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fuga earum neque amet nemo? Ut maxime dolor dolorem hic tempora esse magnam amet ullam? Laboriosam ut amet facere sapiente voluptate!",
        img: isolation,
    },
    {
        id: 7,
        title: "Pompes a chaleur",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fuga earum neque amet nemo? Ut maxime dolor dolorem hic tempora esse magnam amet ullam? Laboriosam ut amet facere sapiente voluptate!",
        img: pompe,
    }
]



  return (
    <div className='w-full'>
        <h3 className='pb-12 text-center text-4xl font-semibold'>Les travaux proposés :</h3>
        <ul className='w-90 m-auto'>
            {travauxData.map(({id,title,content,img}) => (
                <li className='flex flex-col mt-32 p-10' key={id}>
                    <div className='mx-auto'>
                        <img src={img} alt="travaux" />
                    </div>
                    <div className='mt-10'>
                        <h2 className='text-center text-3xl'>{title}</h2>
                        <p className='mt-10 w-7/12 mx-auto text-center font-light text-xl'>{content}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Travaux
