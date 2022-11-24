import React from 'react';
import '/Users/alanzarli/Desktop/APIback/src/components/Map/Map.css';

const Map = () => {
  return (
    <div className='map'>
      <iframe style={{border: 0}} src="https://maps.google.com/maps?q=%0998%20BD%20DE%20L%20EUROPE%2013127%20VITROLLES&t=&z=13&ie=UTF8&iwloc=&output=embed" title='location' id="gmap_canvas" className='w-full h-full rounded-sm' height={400}></iframe>
    </div>
  )
}

export default Map
