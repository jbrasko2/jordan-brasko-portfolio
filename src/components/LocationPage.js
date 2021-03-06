import React from 'react';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';
import { FadeInUp } from 'animate-css-styled-components';
import LocationNav from './LocationNav';
import ScrollButton from './ScrollButton';

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
    {
      state: 'chicago',
      images: importAll(
        require.context(
          '../location-images/chicago',
          true,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
    {
      state: 'vermont',
      images: importAll(
        require.context(
          '../location-images/vermont',
          true,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
    {
      state: 'new-york',
      images: importAll(
        require.context(
          '../location-images/new-york',
          true,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
  ];

  const location = locations.find(location => location.state === url);

  return (
    <Wrapper>
      <LocationNav location={location.state} />
      {location.images.map((image, index) => (
        <FadeInUp key={index} delay={0.25 + index * 0.1 + 's'}>
          <ImageCard key={index} src={image.default} alt={image.state} />
        </FadeInUp>
      ))}
      <Scroll />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const ImageCard = styled.img`
  display: block;
  margin: 100px;
  max-width: 700px;
  max-height: 700px;

  @media (max-width: 740px) {
    max-width: 300px;
  }
`;

const Scroll = styled(ScrollButton)`
  margin-bottom: 100px;
`;

export default LocationPage;
