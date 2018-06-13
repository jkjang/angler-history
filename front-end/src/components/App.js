import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Randing, Timeline } from './../pages';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Randing} />
          <Route exact path="/randing" component={Randing} />
          <Route path="/randing/:name" component={Randing} />
        </Switch>
      </div>
    );
  }
}

export default App;
