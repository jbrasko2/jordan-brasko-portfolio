import React from 'react';
import styled from 'styled-components/macro';
import ProjectCard from '../components/ProjectCard';
import simpleSynth from '../images/SimpleSynth.PNG';
import peculiarBirds from '../images/PeculiarBirds.PNG';
import waveShop from '../images/WaveShop.PNG';
import bookstore from '../images/Bookstore.png';
import { FadeInUp } from 'animate-css-styled-components';

const Projects = () => {
  let projects = [
    {
      id: 1,
      name: 'Peculiar Birds',
      desc: "Inspired by Audubon's paintings, a reference for interesting birds.",
      tools:
        'React | Styled Components | Animations | Redux | Thunk | Ruby on Rails API | PostgreSQL Database',
      url: 'https://jbrasko2.github.io/the-encyclopedia-of-peculiar-birds',
      github: 'https://github.com/jbrasko2/the-encyclopedia-of-peculiar-birds',
      image: peculiarBirds,
    },
    {
      id: 2,
      name: 'WaveShop',
      desc: 'Mock web store for exploring, reviewing and purchasing electronic instruments.',
      tools: 'React | Redux | Thunk | Ruby on Rails API | PostgreSQL Database',
      url: 'https://jbrasko2.github.io/waveshop-frontend/#/',
      github: 'https://github.com/jbrasko2/waveshop-frontend',
      image: waveShop,
    },
    {
      id: 3,
      name: 'Bookstore',
      desc: 'Simple bookstore application with author/book CRUD functionality.',
      tools: 'React | Node.js | Express | MongoDB',
      url: 'https://jb-bookstore-frontend.herokuapp.com/',
      github: 'https://github.com/jbrasko2/bookstore-frontend',
      image: bookstore,
    },
    {
      id: 4,
      name: 'Simple Synth',
      desc: 'In-browser musical synthesizer that allows users to play and experiment with sound synthesis.',
      tools:
        'JavaScript | Ruby on Rails API | PostgreSQL Database | Tone.js | NexusUI',
      url: 'https://jbrasko2.github.io/simple-synth-frontend/',
      github: 'https://github.com/jbrasko2/simple-synth-frontend',
      image: simpleSynth,
    },
  ];

  return (
    <Wrapper>
      {projects.map(project => (
        <FadeInUp
          key={project.id}
          delay={project.id * 0.1 + 's'}
          style={{ display: 'flex' }}
        >
          <ProjectCard key={project.id} {...project} />
        </FadeInUp>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 0;
  overflow: hidden;
`;

export default Projects;
