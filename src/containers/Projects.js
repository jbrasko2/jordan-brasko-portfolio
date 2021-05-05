import React, { Component } from 'react'
import styled from 'styled-components/macro'
import ProjectCard from '../components/ProjectCard'
import simpleSynth from '../images/SimpleSynth.PNG'
import waveShop from '../images/WaveShop.PNG'
import bandManager from '../images/BandManager.PNG'

class Projects extends Component {

    state = {
        projects: [
          {
            id: 1,
            name: "WaveShop",
            desc: "Mock web store for exploring, reviewing and purchasing electronic instruments.",
            tools: "React - Redux - Thunk - Ruby on Rails API - PostgreSQL database", 
            url: "https://jbrasko2.github.io/waveshop-frontend/#/", 
            github:"https://github.com/jbrasko2/waveshop-frontend", 
            image: waveShop
          },
          {
            id: 2,
            name: "Simple Synth",
            desc: "In-browser musical synthesizer that allows users to play and experiment with sound synthesis. Features the ability to save and load presets.",
            tools: "React - Redux - Thunk - Ruby on Rails API - PostgreSQL database", 
            url: "https://jbrasko2.github.io/simple-synth-frontend/", 
            github:"https://github.com/jbrasko2/simple-synth-frontend", 
            image: simpleSynth
          },
          {
            id: 3,
            name: "Band Manager",
            desc: "App designed for band managers to keep track of the bands they manage and the members included in each band.",
            tools: "Ruby on Rails", 
            url: "https://github.com/jbrasko2/rails-band-manager", 
            github:"https://github.com/jbrasko2/rails-band-manager", 
            image: bandManager
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
    padding: 50px 0;
    text-align: center;
`

export default Projects