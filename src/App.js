import React, { Component } from 'react';
import NavBar from './components/NavBar';
import GlobalStyles from './GlobalStyles';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './containers/Projects';
import LocationContainer from './containers/LocationContainer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/photography' component={LocationContainer} />
          <Route exact path='/photography/:url' component={LocationPage} />
        </Switch>

        <GlobalStyles />
      </div>
    );
  }
}

export default App;
