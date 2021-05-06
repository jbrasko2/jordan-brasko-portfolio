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
                    <h1>Hi there! I'm Jordan.</h1>
                    I am a full stack developer specializing in React, Ruby on
                    Rails and JavaScript. I have a professional background in e-commerce 
                    and experience as a touring musician. I use a creative 
                    approach to problem-solving that helps innovators produce 
                    consumer-facing products in new and interesting ways.
                    <br/>
                    <br/>
                    I am a record collector, frozen-pizza enthusiast and avid adventurer. I'm
                    currently living the nomad life with my amazing wife - exploring the country's best hiking trails,
                    critiquing its hidden gem restaurants and closing out the local watering holes.
                    <br/>
                    <br/>
                    I'm looking forward to joining a team that values collaboration, encourages individuality and
                    provides dental &#128513;. 

                 </ProfileIntro>
            </ProfileCard>
            <Contact />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 24px 0;

    @media (max-width: 740px) {
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