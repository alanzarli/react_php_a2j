import React from 'react';
import paneauSolaire from '../assets/imgAbout/paneausolaireabout.jpeg';
import ecologie from '../assets/imgAbout/ecologie.webp';
import economie from '../assets/imgAbout/economie.jpeg'
import { GiSolarPower, GiEcology, GiMoneyStack } from"react-icons/gi";

const Energie = () => {

  const gridData = [
    {
      id: 1,
      icon:( <>
        <GiSolarPower size={80} className="mx-auto absolute top-2 left-2" />
      </>
      ),
      title: "Passez au solaire !",
      content: "Les avantages des panneaux solaires, les panneaux solaires permettent d'alimenter partiellement la maison en chauffage et en eau-chaude qui représentent une grande part de la consommation électrique des foyers. C'est un moyen de consommer de la chaleur qui est écoresponsable et permet de réduire ses émissions de CO2.",
      img: paneauSolaire,
      note: "01.Solaire"
    },
    {
      id: 2,
      icon:( <>
        <GiEcology size={80} className="mx-auto absolute top-2 left-2"/>
      </>
      ),
      title: "Pensez a votre planete !",
      content: "Ces énergies renouvelables permettent de réduire considérablement l'émission de CO2. Elles ne généreraient pas non plus de déchets radioactifs dangereux et leurs ressources seraient infinies grâce au vent, à l'eau et au soleil.",
      img: ecologie,
      note: "02.Ecologie"
    },
    {
      id: 3,
      icon:( <>
        <GiMoneyStack size={80} className="mx-auto absolute top-2 left-2" />
      </>
      ),
      title: "Beneficiez d'aide !",
      content: "MaPrimeRénov' permet de financer les travaux d'isolation, de chauffage, de ventilation ou d'audit énergétique d'une maison individuelle ou d'un appartement en habitat collectif. Les travaux doivent avoir été effectués par des entreprises labellisées RGE (reconnues garantes pour l'environnement).",
      img: economie,
      note: "03.Economie"
    }
  ]



  return (
    <div className='mx-auto w-11/12 p-5'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3 className='pb-16 text-center text-4xl font-semibold'>Les avantages :</h3>
        <ul className='grid grid-cols-1 gap-10'>
          {gridData.map(({id, title, note, img, content, icon}) => (
              <li  key={id} className='w-full p-3'>
                <div className='flex items-start md:flex-nowrap flex-wrap w-full sm:justify-center gap-10'>
                  <div className='w-full'>
                    <img src={img} alt="solaire" className='w-full h-full rounded-lg' />
                    <div className='bg-gray-600 rounded-full w-24 h-24 text-white relative bottom-28 left-2 hover:scale-105 duration-200'>
                      {icon}
                    </div>
                  </div>
                  <div className='w-full bg-gray-100 p-10 rounded-xl mt-5 md:mt-0 max-h-full h-full'>
                    <div className='bg-yellow-300 rounded-full w-min p-2 cursor-pointer hover:scale-105 duration-200'>
                      <p>{note}</p>
                    </div>
                      <h3 className='font-semibold mt-2'>{title}</h3>
                      <p className='mt-12'>
                        {content}
                      </p>
                      <button className='p-3 bg-green-300 text-white rounded-lg mt-4 mx-auto w-full hover:bg-white hover:text-gray-700 hover:border-black hover:border'>Faire mon devis</button>
                  </div>
                </div>
              </li>
          ))}
        </ul>
    </div>
  )
}

export default Energie
