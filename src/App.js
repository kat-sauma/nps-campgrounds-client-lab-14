import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Components/Header.js';
import PrivateRoute from './Components/PrivateRoute.js';
import LoginPage from './AuthPages/LoginPage.js';
import SignUpPage from './AuthPages/SignUpPage.js';
import CampgroundSearchPage from './CampgroundSearchPage/CampgroundSearchPage.js';
import FavoritePage from './FavoritePage/FavoritePage.js';
import Home from './Home/Home.js';
import { getUserFromLocalStorage, putUserInLocalStorage } from './local-storage-utils';


export default class App extends Component {
  state = {
    user: getUserFromLocalStorage()
  }
  handleUserChange = (user) => {
    this.setState({ user })

    putUserInLocalStorage(user);

  }

  handleLogout = () => {

  }
  render() {
    const { user } = this.state;

    return (
      <div className='App'>
        <Router>
          <Header />
          <Switch>
            <Route path='/'
              exact render={(routerProps) =>
                <Home {...routerProps}
                />}
            />
            <PrivateRoute path='/to-dos'
              exact
              token={user && user.token}
              render={(routerProps) =>
                <CampgroundSearchPage user={this.state.user}
                  {...routerProps}
                />}
            />
            <Route path='/login'
              exact render={(routerProps) =>
                <LoginPage
                  handleUserChange={this.handleUserChange}
                  {...routerProps}
                />}
            />
            <Route path='/signup'
              exact render={(routerProps) =>
                <SignUpPage
                  handleUserChange={this.handleUserChange}
                  {...routerProps}
                />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}