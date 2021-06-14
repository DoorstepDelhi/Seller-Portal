import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ExamplePageOne from '../../../Example/index';

export default () => (
  <Switch>
    <Route path="/orders/new" component={ExamplePageOne} />
    <Route path="/orders/history" component={ExamplePageOne} />
  </Switch>
);
