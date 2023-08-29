import React from "react";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleNavigation = (choice) => {
    if(choice == "Login"){
      this.props.history.push("/login")
    }
    if(choice == "Register"){
      this.props.history.push("/register")
    }
  }
  render() {
    return (
    <div>
      <center>
        <h1>Home</h1>
        <button className="loginBtn" onClick={() => this.handleNavigation("Login")}>
          <p>Login</p>
        </button>
        <button className="registerBtn" onClick={() => this.handleNavigation("Register")}>
          <p>Register</p>
        </button>
      </center>
    </div>
    
    );
  }
}
export default withRouter(Home);

