import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Randing, Timeline } from './../pages';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Timeline} />
          <Route exact path="/Randing" component={Randing} />
          <Route path="/Randing/:name" component={Timeline} />
        </Switch>
      </div>
    );
  }
}

export default App;
