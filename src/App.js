import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavbarComponent } from 'components';
import { Home, Succes } from 'pages';

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavbarComponent />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/succes" component={Succes} />
          </Switch>
        </main>
      </Router>
    );
  }
}
