import React from 'react'
import styled from 'styled-components/macro'

const ProjectCard = props => {
    const { name, desc, tools, url, github, image } = props
    return (
        <Wrapper>
            <Title>{name}</Title>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <ProjectImage src={image} />
            </a>
            <Description>{desc}</Description>
            <Line />
            <Tools>{tools}</Tools>
            <Line />
            <LinkWrapper>
                <a href={url} target="_blank" rel="noopener noreferrer">Website</a>
            </LinkWrapper>
            &bull;
            <LinkWrapper>
                <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </LinkWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: inline-block;
    max-width: 400px;
    margin: 24px;
    background-color: #efefef;
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);

    a {
        text-decoration: none;
        color: hsl(0, 0%, 25%);
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
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 4px 8px 16px 4px rgba(0,0,0,0.2);
    }
`

const Description = styled.p`
    text-align: center;
    padding: 12px;
`

const Tools = styled.p`
    padding: 12px;
    text-align: center;
`

const LinkWrapper = styled.div`
    display: inline-block;
    padding: 12px 24px;
    
    a {
        color: #018d7f;
        text-decoration: underline;
    }
`

const Line = styled.div`
    margin: 0 auto;
    width: 75%;
    border-top: 1px solid gray;
`

export default ProjectCard