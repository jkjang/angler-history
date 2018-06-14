import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Randing, Timeline } from './../pages';
import './../styles/main.scss';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Randing} />
        <Route exact path="/randing" component={Randing} />
        <Route path="/randing/:name" component={Randing} />
      </Switch>
    );
  }
}

export default App;
