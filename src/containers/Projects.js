import React, { Component } from 'react'
import styled from 'styled-components/macro'
import ProjectCard from '../components/ProjectCard'
import simpleSynth from '../images/SimpleSynth.PNG'
import peculiarBirds from '../images/PeculiarBirds.PNG'
import waveShop from '../images/WaveShop.PNG'
import { FadeInUp } from 'animate-css-styled-components'

class Projects extends Component {

    state = {
        projects: [
          {
            id: 1,
            name: "Peculiar Birds",
            desc: " (Work in Progress) Inspired by Audubon's paintings, a reference for interesting birds.",
            tools: "React | Redux | Thunk | Ruby on Rails API | PostgreSQL Database", 
            url: "https://jbrasko2.github.io/the-encyclopedia-of-peculiar-birds", 
            github:"https://github.com/jbrasko2/the-encyclopedia-of-peculiar-birds", 
            image: peculiarBirds
          },
          {
            id: 2,
            name: "WaveShop",
            desc: "Mock web store for exploring, reviewing and purchasing electronic instruments.",
            tools: "React | Redux | Thunk | Ruby on Rails API | PostgreSQL Database", 
            url: "https://jbrasko2.github.io/waveshop-frontend/#/", 
            github:"https://github.com/jbrasko2/waveshop-frontend", 
            image: waveShop
          },
          {
            id: 3,
            name: "Simple Synth",
            desc: "In-browser musical synthesizer that allows users to play and experiment with sound synthesis.",
            tools: "JavaScript | Ruby on Rails API | PostgreSQL Database | Tone.js | NexusUI", 
            url: "https://jbrasko2.github.io/simple-synth-frontend/", 
            github:"https://github.com/jbrasko2/simple-synth-frontend", 
            image: simpleSynth
          }
        ]
    }

    render() {
        return (
            <Wrapper>
                {this.state.projects.map(project => 
                  <FadeInUp delay={project.id * .1 +"s"} style={{display: 'flex'}}>
                    <ProjectCard key={project.id} {...project} />
                  </FadeInUp>
                )}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 50px 0;
    overflow: hidden;
`

export default Projects