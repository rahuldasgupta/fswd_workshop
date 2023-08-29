import React from "react";
import { withRouter } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      data: {},
    };
  }
  componentDidMount(){
    let temp = localStorage.getItem("user_data");
    let data = JSON.parse(temp)
    console.log(data)
    this.setState({
        data: data
    })
  }
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/")
  }
  handleNavigation = () => {
    this.props.history.push("/sendMail")
  }
  render() {
    return (
    <div>
      <center>
        <h1>Profile</h1>
        {
          this.state.data.photoURL ?
           <img className="displayImage" src={this.state.data.photoURL}/>
           :
           <></>
        }
        <p className="displayName">{this.state.data.displayName}</p>
        <p className="displayName">{this.state.data.email}</p>
        <br/>
        <button className="sendMail" onClick={() => this.handleNavigation()}>
          <p>SendMail</p>
        </button>
        <br/>
        <button className="logoutBtn" onClick={() => this.handleLogout()}>
          <p>Logout</p>
        </button>
      </center>
    </div>
    
    );
  }
}
export default withRouter(Profile);