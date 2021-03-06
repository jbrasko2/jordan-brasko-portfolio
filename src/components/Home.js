import React from 'react';
import styled from 'styled-components/macro';
import profile from '../images/Self SureShot - Cropped.jpg';
import Contact from './Contact';
import { FadeInLeft } from 'animate-css-styled-components';
import { FadeInRight } from 'animate-css-styled-components';
import { FadeInUp } from 'animate-css-styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Wrapper>
      <ProfileCard>
        <ProfileImage src={profile} alt='profile' />
        <ProfileIntro>
          <FadeInLeft>
            <h1>Hi there, I'm Jordan.</h1>
          </FadeInLeft>
          <FadeInLeft delay='.5s'>
            <p>
              I am a full stack developer specializing in React, Ruby on Rails
              and JavaScript. I have a professional background in e-commerce and
              experience as a touring musician. I use a creative approach to
              problem-solving that helps innovators produce consumer-facing
              products in new and interesting ways.
            </p>
          </FadeInLeft>
          <FadeInRight delay='.75s'>
            <p>
              I am a record collector, frozen-pizza enthusiast and avid
              adventurer. I'm currently living the nomad life with my amazing
              wife - exploring the country's best hiking trails, critiquing its
              hidden gem restaurants and
              <Link to='/photography'>
                {' '}
                taking snapshots with my dad's old Canon AV-1
              </Link>
              .
            </p>
          </FadeInRight>
          <FadeInLeft delay='1s'>
            <p>
              I'm looking forward to joining a team that values collaboration,
              encourages continuous learning and provides dental :)
            </p>
          </FadeInLeft>
        </ProfileIntro>
      </ProfileCard>
      <FadeInUp delay='1.5s'>
        <Contact />
      </FadeInUp>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 24px 0;
  overflow: hidden;

  @media (max-width: 740px) {
    padding: 24px;
  }

  a {
    text-decoration: none;
    color: #0B6A5F;

    &:hover {
      text-decoration: revert;
    }
  }
`;

const ProfileCard = styled.div`
  margin: 0 auto;
  max-width: 925px;
  padding: 24px;
`;

const ProfileImage = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  height: 200px;
`;

const ProfileIntro = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: hsl(0, 0%, 25%);
`;

export default Home;
