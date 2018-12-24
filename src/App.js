import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './components/Home/Home';
import Board from './components/Board/Board';
import NewTask from './components/NewTask/NewTask';
import BoardSettings from './components/Board-settings/Board-settings';
import NotFound from './components/NotFound';
import logo from './logo.svg';
import './App.css';

let actions = require("./actions/HomeActions");

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Kanban board</h1>
          <img src={logo} className="App-logo-right" alt="logo" />
        </header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/board/:id/settings" component={BoardSettings} />
            <Route path="/board/:id" component={Board} />
            <Route path="/newtask" component={NewTask} />
            <Route path="/notfound" component={NotFound} />
            <Redirect from="" to="/notfound" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,actions)(App);
