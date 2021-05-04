import React from 'react'
import styled from 'styled-components/macro'


const ProjectCard = props => {
    const { id, name, desc, tools, url, github, image } = props
    return (
        <Wrapper>
            <Title>{name}</Title>
            <ProjectImage src={image}></ProjectImage>
            <Description>{desc}</Description>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 700px;
    background-color: lightgrey;
    margin: 24px;
    border: 3px dotted black;
`

const Title = styled.h1`
    text-align: center;
    letter-spacing: 0.5rem;
`

const ProjectImage = styled.img`
    width: 100%;
    
`

const Description = styled.p`
    text-align: center;
`

export default ProjectCard