import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ExamplePageOne from '../../../Example/index';

export default () => (
  <Switch>
    <Route path="/account" component={ExamplePageOne} />
  </Switch>
);
