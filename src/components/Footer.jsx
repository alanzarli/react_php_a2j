import React from 'react';
import logoAtlantic from '../assets/logo_atlantic.png';

import logo from  '../assets/logo_footer.png';

const Footer = () => {
  return (
    <div className='w-full m-auto bg-gray-600'>
        <br />
        <br />
      <div className='text-white'>
        <h3 className='mb-6 text-center'>A2J est ambassadeur des produits ATLANTIC® dans le sud de la France</h3>
        <p className='text-center'>Pour plus d'information concerant votre renovation et parler a un conseiller, <a  className="text-blue-500 hover:text-green-300" href="rien">Cliquez ici</a></p>
        <img src={logoAtlantic} alt="logo_atlantic"  className='m-auto mt-5' width="150px" height='100px' />
      </div>
      <div className='mt-12'>
        <div className='flex justify-center items-center lg:gap-36'>
            <div className='text-black font-semibold'>
                <p>2022 A2J Mediteranée</p>
                <p>Specilaiste de la production d'electricite</p>
                <p>a Vitrolles Bouches-du-Rhone</p>
                <p>RCS :Salon B 902 681 485</p>
                <a className="text-blue-500 hover:text-green-300" href='rien'>Mentions légales</a>
            </div>
            <div className='text-black font-semibold'>
                <p>- Chaudieres</p>
                <p>- Pompes à chaleur</p>
                <p>- Panneaux photovoltaiques</p>
                <p>RCS :Salon B 902 681 485</p>
                <p>- Isolations</p>
            </div>
            <div className='text-black font-semibold'>
                <p>Home</p>
                <p>A propos</p>
                <p>Rénovations</p>
                <p>Actualités</p>
                <p>Contact</p>
            </div>
        </div>
        <img src={logo} alt="logo_a2j" className="m-auto" height="100px" width='200px' />
      </div>
    </div>
  )
}

export default Footer
