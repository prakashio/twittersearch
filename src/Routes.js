import React from 'react';
import { Route, Router } from 'react-router-dom';

import history from './utils/history';
import { App, Tweets } from './pages';

const routing = () => (
  <Router history={history}>
    <Route path="/" component={App} exact />
    <Route path="/tweets" component={Tweets} />
  </Router>
);

export default routing;
