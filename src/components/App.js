import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import GroupPickerContainer from './GroupPicker';
import TeamCreatorContainer from './TeamCreator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={GroupPickerContainer} />
            <Route exact path="/group/:id" component={TeamCreatorContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
