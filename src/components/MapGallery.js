// MapGallery.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './MapGallery.css';
import { Typewriter } from 'react-simple-typewriter';

// photo import
import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo4 from './photo4.jpg';
import photo5 from './photo5.jpg';
import photo6 from './photo6.jpg';
import photo7 from './photo7.jpg';
import photo8 from './photo8.jpg';
import photo9 from './photo9.jpg';
import photo10 from './photo10.jpg';
import photo11 from './photo11.jpg';
import photo12 from './photo12.jpg';
import photo13 from './photo13.jpg';
import photo14 from './photo14.jpg';
import photo15 from './photo15.jpg';
import photo16 from './photo16.jpg';
import photo17 from './photo17.jpg';
import photo18 from './photo18.jpg';
import photo19 from './photo19.jpg';
import photo20 from './photo20.jpg';
import photo21 from './photo21.jpg';

import customMarkerIcon from './pin.png';

// map pin icon
const icon = new L.Icon({
  iconUrl: customMarkerIcon,
  iconSize: [30, 45],
  iconAnchor: [15, 45]
});

// photo data arraw with coordinates
const photos = [
  { src: photo1, alt: 'Photo 1', coordinates: [37.8278, -122.4995] }, // Golden Gate, CA
  { src: photo2, alt: 'Photo 2', coordinates: [48.4954, -121.2049] }, // Hidden Lake, Cascades, WA
  { src: photo3, alt: 'Photo 3', coordinates: [48.8323, -121.7899] },  // Cascades Wall, WA
  { src: photo4, alt: 'Photo 4', coordinates: [38.6391, -109.6016] },  // Tower of Babel, Arches, UT
  { src: photo5, alt: 'Photo 5', coordinates: [36.6855, -118.8839] },  // Big Baldy, Sequoia, CA
  { src: photo6, alt: 'Photo 6', coordinates: [40.3139, -105.6447] }, // bear lake, co
  { src: photo7, alt: 'Photo 7', coordinates: [38.2118, -109.9013 ] }, // Canyonlands, UT
  { src: photo8, alt: 'Photo 8', coordinates: [47.8162, -124.4884] }, // Olympic, WA
  { src: photo9, alt: 'Photo 9', coordinates: [38.9131, -123.6880] }, // B Bryan, CA
  { src: photo10, alt: 'Photo 10', coordinates: [38.8795, -104.88362] }, // Garden of the Gods, CO
  { src: photo11, alt: 'Photo 11', coordinates: [33.7630697969034, -84.3951527183411] }, // Georgia Aquarium, GA
  { src: photo12, alt: 'Photo 12', coordinates: [35.5487, -105.2267] }, // Las Vegas, NM
  { src: photo13, alt: 'Photo 13', coordinates: [43.0803, -79.0728] }, // Niagara Falls, NY
  { src: photo14, alt: 'Photo 14', coordinates: [32.7538, -117.2521] }, // San Diego, CA
  { src: photo15, alt: 'Photo 15', coordinates: [37.9989, -105.7085] }, // Crestone, CO
  { src: photo16, alt: 'Photo 16', coordinates: [34.8337, -111.8233] }, // Sedona, AZ
  { src: photo17, alt: 'Photo 17', coordinates: [44.4962, -124.0854] }, // Newport, OR
  { src: photo18, alt: 'Photo 18', coordinates: [45.5254, -122.7180] }, // Portland, OR
  { src: photo19, alt: 'Photo 19', coordinates: [32.6178, -80.1859] }, // Charleston, SC
  { src: photo20, alt: 'Photo 20', coordinates: [44.3299, -71.7695] }, // Littleton, NH
  { src: photo21, alt: 'Photo 21', coordinates: [42.1164, -70.2581] }, // PTown, MA
];

function MapGallery() {
  const [hoveredPhoto, setHoveredPhoto] = useState(null);

  const handleTouchOutside = (event) => {
    if (!event.target.closest('.hover-preview') && !event.target.closest('.leaflet-marker-icon')) {
      setHoveredPhoto(null);
    }
  };

  useEffect(() => {
    // handles touch on mobile
    if (hoveredPhoto) {
      document.addEventListener('touchstart', handleTouchOutside);
    } else {
      document.removeEventListener('touchstart', handleTouchOutside);
    }
    return () => {
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  }, [hoveredPhoto]);

  return (
    <section className="map-gallery">
      <h2>
      <Typewriter
              words={['PhotoAnchor']}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={15}
              deleteSpeed={30}
              delaySpeed={800}
            />
      </h2>
      <div className="map-container">
        <MapContainer center={[37.0902, -95.7129]} zoom={4} scrollWheelZoom={false} className="map">
        <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXNjaDkyIiwiYSI6ImNtMTl1anZhNjB2bGMyam9mZGRkMGdoYXEifQ.PbaVJiM6i57EiJw5ujYruw`}
            attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors'/>

{photos.map((photo, index) => (
            <Marker
              key={index}
              position={photo.coordinates}
              icon={icon}
              eventHandlers={{
                mouseover: () => setHoveredPhoto(photo),
                mouseout: () => setHoveredPhoto(null),
              }}
            />
          ))}
        </MapContainer>

        {hoveredPhoto && (
          <div className="hover-preview">
            <img src={hoveredPhoto.src} alt={hoveredPhoto.alt} />
            {/* <p>{hoveredPhoto.alt}</p> */}
          </div>
        )}
      </div>
    </section>
  );
}

export default MapGallery;
