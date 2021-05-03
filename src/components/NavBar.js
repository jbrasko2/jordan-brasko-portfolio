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
            </RightWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    position: sticky;
    top: 0;
    height: 48px;
    background-color: hsl(0, 0%, 100%);
    border-bottom: 1px solid hsl(0, 0%, 90%);
`

const LeftWrapper = styled.div`
    float: left;
    a {
        font-size: 1.15rem;
        text-decoration: none;
        color: black;
    }
`

const RightWrapper = styled.div`
    float: right;

    a {
        font-size: 1.15rem;
        text-decoration: none;
        color: black;
    }
`

const LinkButton = styled.div`
    height: 100%;

    &:hover {
        background-color: hsl(0, 0%, 50%);
    }
`

export default NavBar