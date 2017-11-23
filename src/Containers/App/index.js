// @flow
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Routes from '../../routes';
import RouteNavItem from '../../Components/routeNavItem';
import { userLogout, userLogin } from './action';
import './index.css';

class App extends Component<
  { history: Object, isAuthenticated: boolean, userLogout: Function, userLogin: Function },
  { isAuthenticated: boolean }
> {
  handleLogout = () => {
    this.props.userLogout();
    this.props.history.push('/login');
  };

  render() {
    const childProps = {
      isAuthenticated: this.props.isAuthenticated,
      userLogin: this.props.userLogin
    };
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.props.isAuthenticated ? (
                <NavItem onClick={this.handleLogout}>Logout</NavItem>
              ) : (
                [
                  <RouteNavItem key={1} href="/signup">
                    Signup
                  </RouteNavItem>,
                  <RouteNavItem key={2} href="/login">
                    Login
                  </RouteNavItem>
                ]
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(connect(
  store => ({
    isAuthenticated: store.currentUser.isAuthenticated
  }),
  dispatch => bindActionCreators({ userLogout, userLogin }, dispatch)
)(App));
