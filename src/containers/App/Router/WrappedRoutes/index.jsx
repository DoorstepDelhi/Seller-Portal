import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../../Layout/index';

import Dashboard from './Dashboard';
import Products from './Products';
import Orders from './Orders';
import Transactions from './Transactions';
import Returns from './Returns';
import Support from './Support';
import Account from './Account';
import Documentations from './Documentations';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/products" component={Products} />
      <Route path="/orders" component={Orders} />
      <Route path="/transactions" component={Transactions} />
      <Route path="/returns" component={Returns} />
      <Route path="/support" component={Support} />
      <Route path="/account" component={Account} />
      <Route path="/documentations" component={Documentations} />
    </div>
  </div>
);
