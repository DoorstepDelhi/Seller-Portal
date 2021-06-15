/* eslint-disable react/jsx-indent */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from '../LogIn/index';

import Dashboard from '../Dashboarddesign/index';



const Pages = () => (
  <Switch>
    <Route path="/pages/one" component={Dashboard} />
    <Route path="/pages/dashboard" component={Dashboard} />
    
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
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
