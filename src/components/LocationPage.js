import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const LocationPage = () => {
  const { url } = useParams();
  function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../location-images/california', false, /\.(png|jpe?g|svg)$/));
  return (
    <>
      {images.map(image => (
        <img src={image} alt='info'/>
      ))}
    </>
  );
};

export default LocationPage;
