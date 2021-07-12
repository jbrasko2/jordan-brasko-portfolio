import React from 'react';
import styled from 'styled-components/macro';
import { FadeInUp } from 'animate-css-styled-components';
import { Link } from 'react-router-dom';

const LocationContainer = () => {
  const locations = [
    { name: 'Colorado', id: 1, image: '000524740002', url: 'colorado' },
    { name: 'New Mexico', id: 2, image: '000524740022', url: 'new-mexico' },
    { name: 'Arizona', id: 3, image: '000524750010', url: 'arizona' },
    { name: 'California', id: 4, image: '000524730006', url: 'california' },
  ];

  return (
    <Wrapper>
      {locations.map(location => {
        return (
          <FadeInUp delay={location.id * 0.1 + 's'}>
            <Link to={`/photography/${location.url}`}>
              <LocationButton>{location.name}</LocationButton>
            </Link>
          </FadeInUp>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  a {
    text-decoration: none;
    margin: 12px;
  }
`;

const LocationButton = styled.button`
  display: block;
  color: hsl(0, 0%, 25%);
  font-size: 2rem;
  background: white;
  padding: 12px;
  border: none;
  letter-spacing: 0.25rem;
  font-family: inherit;

  &:hover {
    cursor: pointer;

    ::after {
      content: ' -';
    }

    ::before {
      content: '- ';
    }
  }
`;

export default LocationContainer;
