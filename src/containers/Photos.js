import React from 'react';
import styled from 'styled-components/macro';
import { FadeInUp } from 'animate-css-styled-components';
import LocationCard from '../components/LocationCard';

const Photos = () => {
  const locations = [
    { name: 'Colorado', id: 1 },
    { name: 'New Mexico', id: 2 },
    { name: 'Arizona', id: 3 },
    { name: 'California', id: 4 },
  ];

  return (
    <Wrapper>
      {locations.map(location => (
        <FadeInUp delay={location.id * 0.1 + 's'} style={{ display: 'flex' }}>
          <LocationCard key={location.id} {...location} />
        </FadeInUp>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 0;
  overflow: hidden;
`;

export default Photos;