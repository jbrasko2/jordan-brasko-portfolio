import React from 'react';
import styled from 'styled-components/macro';

const LocationCard = props => {
  const { id, name, image } = props;
  return (
    <Wrapper>
      <ProjectImage
        src={`${process.env.PUBLIC_URL}/assets/location-thumbs/${image}.jpg`}
      />
      <Description>{name}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  max-width: 400px;
  margin: 24px;
  background-color: #efefef;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const ProjectImage = styled.img`
  width: 85%;
  height: 240px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-top: 24px;

  &:hover {
    box-shadow: 4px 8px 16px 4px rgba(0, 0, 0, 0.2);
  }
`;

const Description = styled.p`
  text-align: center;
  padding: 12px;
`;

export default LocationCard;
