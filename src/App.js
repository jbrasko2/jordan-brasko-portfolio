import React, { Component } from 'react'
import NavBar from './components/NavBar'
import GlobalStyles from './GlobalStyles';
import { Switch, Route } from 'react-router-dom'
import About from './components/About'


class App extends Component {
  render () {
    return (
      <>
        <div className="App">
          <NavBar />
        </div>

        <Switch>
          <Route exact path='/about' component={About} />
        </Switch>

        <GlobalStyles />
      </>
    )
  }
}

export default App;
