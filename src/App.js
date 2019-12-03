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
import Home from './components/home';
import './components/css/App.css'
import {Header} from './components/header'
import {ChatCom} from "./components/chat-com";

export class App extends Component {
  render() {
    return (
      <div>
      <Header />
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/chat" component={ChatCom}/>
      </div>
    )
  }
}

export default App
