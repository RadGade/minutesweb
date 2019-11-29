import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";
import Login  from './components/login';
import Freinds from './components/freinds';
import './components/css/App.css'
import {Header} from './components/header'

export class App extends Component {
  render() {
    return (
      <div>
      <Header />
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Freinds}/>
      </div>
    )
  }
}

export default App
