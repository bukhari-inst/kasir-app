import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { NavbarComponent } from 'components';
import { Home, Succes } from 'pages';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/succes" component={Succes} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
