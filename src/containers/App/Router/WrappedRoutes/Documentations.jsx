import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FAQ from '../../../Faq/index';
import ExamplePageOne from '../../../Example/index';

export default () => (
  <Switch>
    <Route path="/documentations/faq" component={FAQ} />
    <Route path="/documentations/how-to-use" component={ExamplePageOne} />
    <Route path="/documentations/privacy-policy" component={ExamplePageOne} />
    <Route path="/documentations/terms-and-conditions" component={ExamplePageOne} />
  </Switch>
);
