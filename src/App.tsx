import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route, BrowserRouter } from 'react-router-dom'
import LandingPage from './views/LandingPage';
import NotFound from './views/NotFoundView';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route component={NotFound} />
          </Switch>
        </>
      </BrowserRouter>
      </>
    );
  }
}

export default App;