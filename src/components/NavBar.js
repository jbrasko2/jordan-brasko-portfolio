import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const NavBar = () => {
    return (
        <Wrapper>
            <LeftWrapper>
                <Link to='/'>
                    <LinkButton>Jordan Brasko</LinkButton>
                </Link>
            </LeftWrapper>
            <RightWrapper>
                <Link to='/about'>
                    <LinkButton>About</LinkButton>
                </Link>
                <Link to='/projects'>
                    <LinkButton>Projects</LinkButton>
                </Link>
                <Link to='/contact'>
                    <LinkButton>Contact</LinkButton>
                </Link>
            </RightWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    position: sticky;
    width: 100vw;
    top: 0;
    height: 48px;
    background-color: hsl(0, 0%, 100%);
    border-bottom: 1px solid hsl(0, 0%, 90%);
`

const LeftWrapper = styled.div`
    float: left;
    height: 48px;
    margin-left: 24px;
    a {
        font-size: 1rem;
        text-decoration: none;
        color: black;
    }
`

const RightWrapper = styled.div`
    float: right;
    height: 48px;
    margin-right: 24px;
    a {
        font-size: 1rem;
        text-decoration: none;
        color: black;
    }

    @media (max-width: 600px) {
        a {
            display: block;
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