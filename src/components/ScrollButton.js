import React from 'react';
import styled from 'styled-components/macro';

const ScrollButton = ({ className }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledButton className={className} onClick={scrollToTop}>
      Back To Top
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: 3px solid hsl(0, 0%, 25%);
  padding: 12px 24px;
  background-color: white;
  font-family: inherit;
  font-size: 1rem;

  &:hover {
      cursor: pointer;
      background-color: #ededed
  }
`;

export default ScrollButton;
