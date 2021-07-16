import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';
import { FadeInUp } from 'animate-css-styled-components';
import { Link } from 'react-router-dom';

const LocationPage = () => {
  const [loaded, setLoaded] = useState(false);
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
      <LocationList>
        <Location>
          <Link to='/photography/colorado'>Colorado</Link>
        </Location>
        <Location>
          <Link to='/photography/new-mexico'>New Mexico</Link>
        </Location>
        <Location>
          <Link to='/photography/arizona'>Arizona</Link>
        </Location>
        <Location>
          <Link to='/photography/california'>California</Link>
        </Location>
      </LocationList>
      {location.images.map((image, index) => (
        <FadeInUp delay={0.25 + index * 0.1 + 's'}>
          <ImageCard
            key={index}
            src={image.default}
            alt={image.state}
            onLoad={() => setLoaded(true)}
            style={loaded ? {} : { display: 'none' }}
          />
        </FadeInUp>
      ))}
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
`;

const LocationList = styled.ol`
  padding: 0;
  margin-top: 120px;
  list-style-type: none;
`;

const Location = styled.li`
  display: inline;
  font-size: 2rem;
  --spacing: 12px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &:before {
      content: '';
      margin-right: var(--spacing);
      border-right: 3px solid hsl(0, 0%, 25%);
    }
  }

  a {
    color: hsl(0, 0%, 25%);
    text-decoration: none;

    &:hover {
      font-weight: bold;
    }
  }
`;

export default LocationPage;
