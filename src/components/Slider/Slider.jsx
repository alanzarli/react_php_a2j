import React from 'react';
import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import banner from '../../assets/combles.jpg'
import bannerTwo from '../../assets/nrg.jpg'
import '/Users/alanzarli/Desktop/APIback/src/components/Slider/Slider.css'

const Slider = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <Splide hasTrack={ false }>
          <SplideTrack>
            <SplideSlide>
              <img src={banner} alt="vf"  className='w-screen'/>
            </SplideSlide>
            <SplideSlide>
              <img src={bannerTwo} alt="vf" className='w-screen'/>
            </SplideSlide>
          </SplideTrack>
      </Splide>
    </div>
  )
}

export default Slider
