import React from 'react'
import styled from 'styled-components/macro'
import profileImage from '../images/35239659_10155244881526114_8170993985775468544_o.jpg'

const Home = () => {
    return (
        <Wrapper>
            <ProfileCard>
                <img src={profileImage} />
                <ProfileIntro>
                    Full stack developer specializing in React, Ruby on
                    Rails and JavaScript. Solid professional background in e-commerce 
                    and experience as a touring musician. Uses a creative 
                    approach to problem-solving that helps innovators produce 
                    consumer-facing products in new and interesting ways.
                 </ProfileIntro>
            </ProfileCard>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px 0;

    @media (max-width: 600px) {
        padding: 24px;
    }
`

const ProfileCard = styled.div`
    max-width: 800px;

    img {
        display: block;
        margin: 0 auto;
        border-radius: 50%;
    }
`

const ProfileIntro = styled.div`
    padding: 24px;
    text-align: center;
    font-size: 1.5rem;
`

export default Home