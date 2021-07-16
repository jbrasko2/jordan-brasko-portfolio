import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const LocationNav = props => {
  const getClassName = name => {
    if (name === props.location) {
      return 'bold';
    }
  };

  return (
    <LocationList>
      <Location>
        <Link to='/photography/colorado' className={getClassName('colorado')}>
          Colorado
        </Link>
      </Location>
      <Location>
        <Link
          to='/photography/new-mexico'
          className={getClassName('new-mexico')}
        >
          New Mexico
        </Link>
      </Location>
      <Location>
        <Link to='/photography/arizona' className={getClassName('arizona')}>
          Arizona
        </Link>
      </Location>
      <Location>
        <Link
          to='/photography/california'
          className={getClassName('california')}
        >
          California
        </Link>
      </Location>
    </LocationList>
  );
};

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

  a.bold {
    font-weight: bold;
  }
`;

export default LocationNav;
