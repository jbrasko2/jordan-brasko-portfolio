import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import resume from '../Jordan Brasko Resume.pdf'

const NavBar = () => {
    return (
        <>
            <Wrapper>
                <LeftWrapper>
                    <Link to='/'>
                        <LinkButton>Jordan Brasko</LinkButton>
                    </Link>
                </LeftWrapper>
                <RightWrapperLarge>
                    <a target="_blank" href={resume} rel="noopener noreferrer">
                        <LinkButton>Resume</LinkButton>
                    </a>
                    <Link to='/projects'>
                        <LinkButton>Projects</LinkButton>
                    </Link>
                </RightWrapperLarge>
            </Wrapper>
            <RightWrapperSmall>
                <a target="_blank" href={resume} rel="noopener noreferrer">
                    <LinkButton>Resume</LinkButton>
                </a>
                <Link to='/projects'>
                    <LinkButton>Projects</LinkButton>
                </Link>
            </RightWrapperSmall>
        </>
    )
}

const Wrapper = styled.nav`
    width: 100vw;
    height: 48px;
    background-color: hsl(0, 0%, 100%);
    border-bottom: 1px solid hsl(0, 0%, 90%);
`

const LeftWrapper = styled.div`
    float: left;
    height: 100%;

    @media (max-width: 740px) {
        float: none;
    }
    
    a {
        height: 100%;
        color: hsl(0, 0%, 25%);
        
        @media (max-width: 740px) {
            display: block;
            
            &:hover {
                background-color: #ededed;
            }
        }
    }
`

const RightWrapperLarge = styled.div`
    float: right;
    height: 100%;
    
    a {
        color: hsl(0, 0%, 25%);
        
        @media (max-width: 740px) {
            display: none;
        }
    }
`

const RightWrapperSmall = styled.div`
    a {
        display: none;

        @media (max-width: 740px) {
            display: block;
            color: hsl(0, 0%, 25%);
            border-bottom: 1px solid hsl(0, 0%, 90%);
            
            &:hover {
                background-color: #ededed;
            }
        }
    }
`

const LinkButton = styled.div`
    display: inline-block;
    height: 100%;
    padding: .75rem 1rem;
    letter-spacing: .25rem;
    &:hover {
        background-color: #ededed;
    }
`
export default NavBar