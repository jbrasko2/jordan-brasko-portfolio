import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const ProjectCard = props => {
    const { id, name, desc, tools, url, github, image } = props
    return (
        <Wrapper>
            <Link to={url}>
                <CardWrapper>
                    <Title>{name}</Title>
                    <ProjectImage src={image} />
                </CardWrapper>
            </Link>
            <Description>{desc}</Description>
            <Tools>{tools}</Tools>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: inline-block;
    max-width: 600px;
    margin: 24px;
    border: 3px solid black;
    overflow: auto;

    a {
        text-decoration: none;
        color: black;
    }
`

const CardWrapper = styled.div`
`

const Title = styled.h1`
    text-align: center;
    letter-spacing: 0.25rem;
    font-weight: 300;
`

const ProjectImage = styled.img`
    width: 100%;
    padding: 0 24px;
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

export default ProjectCard