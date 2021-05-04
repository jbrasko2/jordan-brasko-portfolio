import React, { Component } from 'react'
import NavBar from './components/NavBar'
import GlobalStyles from './GlobalStyles';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'


class App extends Component {
  render () {
    return (
      <>
        <div className="App">
          <NavBar />
        </div>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
        </Switch>

        <GlobalStyles />
      </>
    )
  }
}

export default App;
