import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../../Dashboard';

export default () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);
