import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import gitLogo from '../images/GitHub-Mark-64px.png'

const ProjectCard = props => {
    const { id, name, desc, tools, url, github, image } = props
    return (
        <Wrapper>
            <Title>{name}</Title>
            <a href={url}>
                <ProjectImage src={image} />
            </a>
            <Description>{desc}</Description>
            <Tools>{tools}</Tools>
            <a href={github}><GitHubLogo src={gitLogo}></GitHubLogo></a>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: inline-block;
    max-width: 600px;
    margin: 24px;
    background-color: #efefef;
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);

    a {
        text-decoration: none;
        color: black;
    }
`

const Title = styled.h1`
    margin: 0;
    padding: 24px 0;
    text-align: center;
    letter-spacing: 0.25rem;
    font-weight: 300;
`

const ProjectImage = styled.img`
    width: 85%;
    margin: 0 24px;
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 4px 8px 16px 4px rgba(0,0,0,0.2);
    }
`

const Description = styled.p`
    text-align: center;
    padding: 24px;
`

const Tools = styled.p`
    padding: 24px;
    text-align: center;
    border-top: 1px solid grey;
`

const GitHubLogo = styled.img`
        padding-bottom: 24px;
`

export default ProjectCard