import React from 'react'
import styled from 'styled-components/macro'
import profileImage from '../images/profile.jpg'
import Contact from './Contact'

const Home = () => {
    return (
        <Wrapper>
            <ProfileCard>
                <ProfileImage src={profileImage} alt='profile'/>
                <ProfileIntro>
                    <h1>Hello! I'm Jordan.</h1>
                    I am a full stack developer specializing in React, Ruby on
                    Rails and JavaScript. I have a solid professional background in e-commerce 
                    and experience as a touring musician. I use a creative 
                    approach to problem-solving that helps innovators produce 
                    consumer-facing products in new and interesting ways.
                 </ProfileIntro>
            </ProfileCard>
            <Contact />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 100px 0;

    @media (max-width: 600px) {
        padding: 24px;
    }
`

const ProfileCard = styled.div`
    margin: 0 auto;
    max-width: 800px;
    padding: 24px;
`

const ProfileImage = styled.img`
    display: block;
    margin: 0 auto;
    border-radius: 50%;
`

const ProfileIntro = styled.div`
    text-align: center;
    font-size: 1.5rem;
    color: hsl(0, 0%, 25%);
`

export default Home