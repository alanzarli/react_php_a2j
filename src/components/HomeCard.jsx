import React from 'react';
import chaudiere from '../assets/chaudiere.jpg';
import isolation from '../assets/isolations.webp';
import panneauSolaire from '../assets/panneau_solaire.png'
import aideRenovation from '../assets/aides_renovation.png'

const HomeCard = () => {

    const posts = [
        {
            title: "Changement de chauffage",
            img: chaudiere,
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content long established fact that a reader"
        },
        {
            title: "Isolation de la maison",
            img: isolation,
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content long established fact that a reader"
        },
        {
            title: "Passer a l'energie solaire",
            img: panneauSolaire,
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable contentlong established fact that a reader"
        },
        {
            title: "Calcul des aides et primes de l'etat",
            img: aideRenovation,
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
    ];

  return (
    <div className='bg-gray-300 mt-24 w-full mx-auto border-t-4 border-t-blue-600 rounded-sm'>
        <br />
        <br />
        <h3 className='text-gray-900 text-center font-bold text-xl'>LES TRAVAUX PROPOSEE CHEZ A2J</h3>
        <div className='mt-24 mx-auto'>
            <>
                <div className="grid gap-2 lg:grid-cols-4">
                    {posts.map((items, key) => (
                        <div className=" w-10/12 mx-auto rounded-lg shadow-md lg:max-w-sm lg:mb-0 mb-10" key={key}>
                            <img
                                className="object-cover w-full h-48 rounded-t shadow"
                                src={items.img}
                                alt="card"
                            />
                            <div className="p-4 bg-gray-200 rounded-b">
                                <h4 className="text-blue-600 text-lg font-semibold">
                                    {items.title}
                                </h4>
                                <p className="mb-2 leading-normal">
                                {items.content}
                                </p>
                                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                    Plus d'info
                                </button>
                            </div>
                        </div>
                    ))}
                    <br />
                    <br />
                </div>
            </>
        </div>
    </div>
  )
}

export default HomeCard
