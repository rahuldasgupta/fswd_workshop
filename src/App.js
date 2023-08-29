import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./home/home";
import Login from "./auth/login";
import Register from "./auth/register";
import sendMail from "./home/sendMail";
import profile from "./home/profile";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/sendMail" component={sendMail} />
          <Route path="/profile" component={profile} />
        </Switch>
      </Router>
    );
  }
}