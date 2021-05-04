import React, { Component } from 'react'
import styled from 'styled-components/macro'
import ProjectCard from '../components/ProjectCard'
import simpleSynth from '../images/SimpleSynth.PNG'
import waveShop from '../images/WaveShop.PNG'

class Projects extends Component {

    state = {
        projects: [
          {
            id: 1,
            name: "WaveShop",
            desc: "Mock web store for exploring, reviewing and purchasing electronic instruments",
            tools: "React - Redux - Thunk - Ruby on Rails API - PostgreSQL database", 
            url: "https://jbrasko2.github.io/waveshop-frontend/#/", 
            github:"https://github.com/jbrasko2/waveshop-frontend", 
            image: waveShop
          },
          {
            id: 2,
            name: "SimpleSynth",
            desc: "In-browser musical synthesizer that allows users to play and experiment with sound synthesis. Features the ability to save and load presets.",
            tools: "React - Redux - Thunk - Ruby on Rails API - PostgreSQL database", 
            url: "https://jbrasko2.github.io/simple-synth-frontend/", 
            github:"https://github.com/jbrasko2/simple-synth-frontend", 
            image: simpleSynth
          }
        ]
    }

    render() {
        return (
            <Wrapper>
                {this.state.projects.map(project => <ProjectCard key={project.id} {...project} />)}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px 0;
`

export default Projects