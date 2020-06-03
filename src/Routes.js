import React from 'react';
import { Route, Router } from 'react-router-dom';

import history from './utils/history';
import { App, SearchResult, Tweets } from './pages';

const routing = () => (
  <Router history={history}>
    <Route path="/" component={App} exact />
    <Route path="/tweets" component={Tweets} />
    <Route path="/search" component={SearchResult} />
  </Router>
);

export default routing;
