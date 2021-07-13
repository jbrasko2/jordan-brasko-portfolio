import React from 'react';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';

const LocationPage = () => {
  const { url } = useParams();
  function importAll(r) {
    return r.keys().map(r);
  }

  const locations = [
    {
      state: 'arizona',
      images: importAll(
        require.context(
          '../location-images/arizona',
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
    {
      state: 'california',
      images: importAll(
        require.context(
          '../location-images/california',
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
    {
      state: 'colorado',
      images: importAll(
        require.context(
          '../location-images/colorado',
          true,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
    {
      state: 'new-mexico',
      images: importAll(
        require.context(
          '../location-images/new-mexico',
          true,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
  ];

  const location = locations.find(location => location.state === url);

  return (
    <Wrapper>
      {location.images.map(image => (
        <ImageCard src={image.default} alt='info' />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageCard = styled.img`
  display: block;
  margin: 100px;
  max-width: 700px;
  max-height: 700px;
`;

export default LocationPage;
