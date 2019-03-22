import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GroupPickerContainer from './GroupPicker';
import TeamCreatorContainer from './TeamCreator';
import Title from './Title';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Title} />
      <Switch>
        <Route exact path="/" component={GroupPickerContainer} />
        <Route exact path="/group/:id" component={TeamCreatorContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
