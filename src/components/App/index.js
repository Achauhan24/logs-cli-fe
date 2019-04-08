import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Login from '../../containers/Login';
import Logs from '../../containers/Logs';
import { Helmet } from 'react-helmet';
import './App.scss'
import { hasCredentials } from '../../commons/js/utils/hasCredentials';

class App extends Component {
  constructor(props) {
    super(props)

    const isLoggedIn = store.getState().session.isLoggedIn;


    if (isLoggedIn) {
      if (hasCredentials()) {

      } 
    } else {
      if (hasCredentials()) {
        store.dispatch({
          type: "SET_LOGGED_IN",
          payload: {
            userId: JSON.parse(localStorage.getItem("userId")),
            value: true,
          }
        })
      } else {

      }
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Helmet>
              <title>LOGS CLI</title>
            </Helmet>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/logs" component={Logs} />
              <Route exact path="/" render={(props) => {
                return <Redirect to="/login" />
              }} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
