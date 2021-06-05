import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../../../Layout/index';

import ExamplePageOne from '../../../Example/index';
import ExamplePageTwo from '../../../ExampleTwo/index';

const Pages = () => (
  <Switch>
    <Route path="/pages/one" component={ExamplePageOne} />
    <Route path="/pages/two" component={ExamplePageTwo} />
  </Switch>
);

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
    </div>
  </div>
);
