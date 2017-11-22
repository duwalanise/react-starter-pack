// @flow
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: C, props: cProps, ...rest }: { component: any, props: Object }) => (
  <Route
    {...rest}
    render={(props: { location: Object }) =>
      cProps.isAuthenticated ? (
        <C {...props} {...cProps} />
      ) : (
        <Redirect to={`/login?redirect=${props.location.pathname}${props.location.search}`} />
      )
    }
  />
);
