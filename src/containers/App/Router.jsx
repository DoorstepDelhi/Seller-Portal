import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from '../LogIn/index';
import ExamplePageOne from '../Example/index';

import TransactionTable from "../Transactions/index";
import ReturnsTable from "../Returns/index"
import OrdersHistoryTable from "../OrdersHistory/index"
import OrdersDetailsPage from "../OrdersDetails/index"

const Orders = () => (
  <Switch>
    <Route path="/orders/new" component={ExamplePageOne} />
    <Route path="/orders/details" component={OrdersDetailsPage} />
    <Route path="/orders/history" component={OrdersHistoryTable} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/orders" component={Orders} />
      <Route path="/transactions" component={TransactionTable} />
      <Route path="/returns" component={ReturnsTable} />
    </div>

  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/log_in" component={LogIn} />
        <Route path="/" component={wrappedRoutes} />

      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
