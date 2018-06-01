import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import App from './components/App';
import { store, history } from './redux/store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
