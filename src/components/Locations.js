import React from 'react';
import styled from 'styled-components/macro';
import { FadeInUp } from 'animate-css-styled-components';
import { Link } from 'react-router-dom';

const Locations = () => {
  const locations = [
    { name: 'Colorado', id: 1, url: 'colorado' },
    { name: 'New Mexico', id: 2, url: 'new-mexico' },
    { name: 'Arizona', id: 3, url: 'arizona' },
    { name: 'California', id: 4, url: 'california' },
    { name: 'Chicago', id: 5, url: 'chicago' },
    { name: 'Vermont', id: 6, url: 'vermont' },
    { name: 'New York', id: 7, url: 'new-york' },
  ];

  return (
    <Wrapper>
      <h1>Road Trip 2021</h1>
      {locations.map(location => {
        return (
          <FadeInUp key={location.id} delay={location.id * 0.1 + 's'}>
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
  overflow: hidden;
  a {
    text-decoration: none;
  }
  h1 {
    color: hsl(0, 0%, 25%);
    letter-spacing: 0.25rem;
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

export default Locations;
