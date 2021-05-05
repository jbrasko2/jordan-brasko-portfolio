import React from 'react'
import styled from 'styled-components/macro'
import emailIcon from '../images/emailIcon.png'
import githubIcon from '../images/githubIcon.png'
import instagramIcon from '../images/instagramIcon.png'
import linkedinIcon from '../images/linkedinIcon.png'


const Contact = () => {
    return (
        <Wrapper>
            <LinkWrapper href="mailto: jordan.brasko@gmail.com" rel="noopener noreferrer" target="_blank">
                <img src={emailIcon} alt='email'></img>
            </LinkWrapper>
            <LinkWrapper href='https://github.com/jbrasko2' rel="noopener noreferrer" target="_blank">
                <img src={githubIcon} alt='github'></img>
            </LinkWrapper>
            <LinkWrapper href='https://www.instagram.com/mr.jordan.brasko' rel="noopener noreferrer" target="_blank">
                <img src={instagramIcon} alt='instagram'></img>
            </LinkWrapper>
            <LinkWrapper href='https://www.linkedin.com/in/jordan-brasko/' rel="noopener noreferrer" target="_blank">
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