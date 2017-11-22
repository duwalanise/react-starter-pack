import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './Components/AuthenticatedRoute';
import UnauthenticatedRoute from './Components/UnauthenticatedRoute';
import asyncComponent from './Components/AsyncComponent';

const AsyncHome = asyncComponent(() => import('./Containers/Home'));
const AsyncLogin = asyncComponent(() => import('./Containers/Login'));
const AsyncNotFound = asyncComponent(() => import('./Containers/NotFound'));

export default ({ childProps }) => (
  <Switch>
    <AuthenticatedRoute path="/" exact component={AsyncHome} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={AsyncLogin} props={childProps} />
    <Route component={AsyncNotFound} />
  </Switch>
);
