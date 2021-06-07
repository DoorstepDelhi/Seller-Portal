import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ExamplePageOne from '../../../Example/index';

export default () => (
  <Switch>
    <Route path="/documentations/faq" component={ExamplePageOne} />
    <Route path="/documentations/how-to-use" component={ExamplePageOne} />
    <Route path="/documentations/privacy-policy" component={ExamplePageOne} />
    <Route path="/documentations/faq" component={ExamplePageOne} />
  </Switch>
);
