// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

export default (props: { href: string, children: string }) => (
  <Route path={props.href} exact>
    {({ match, history }) => (
      <NavItem
        onClick={e => history.push(e.currentTarget.getAttribute('href'))}
        {...props}
        active={!!match}
      >
        {props.children}
      </NavItem>
    )}
  </Route>
);
