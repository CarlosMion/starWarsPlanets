import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../components/NotFoundPage';

export default function Routes() {
  const routes = {
    home: '/',
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={App} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
