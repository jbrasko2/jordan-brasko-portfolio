import React from 'react'
import styled from 'styled-components/macro'
import emailIcon from '../images/emailIcon.png'
import githubIcon from '../images/githubIcon.png'
import instagramIcon from '../images/instagramIcon.png'
import linkedinIcon from '../images/linkedinIcon.png'


const Contact = () => {
    return (
        <Wrapper>
            <LinkWrapper href='email'>
                <img src={emailIcon} alt='email'></img>
            </LinkWrapper>
            <LinkWrapper href='email'>
                <img src={githubIcon} alt='github'></img>
            </LinkWrapper>
            <LinkWrapper href='email'>
                <img src={instagramIcon} alt='instagram'></img>
            </LinkWrapper>
            <LinkWrapper href='email'>
                <img src={linkedinIcon} alt='linkedin'></img>
            </LinkWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 24px;
`

const LinkWrapper = styled.a`
    padding: 12px;

    img {
        filter: invert(20%)
    }
`

export default Contact