import React from "react";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

import 'react-toastify/dist/ReactToastify.css';

class sendMail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      subject: "",
      message: "",
      fullName: ""
    };
  }
  handleFullName = (x) => {
    this.setState({ fullName: x.target.value });
  };
  handleEmail = (x) => {
    this.setState({ email: x.target.value });
  };
  handleSubject = (x) => {
    this.setState({ subject: x.target.value });
  };
  handleMessage = (x) => {
    this.setState({ message: x.target.value });
  };
  handleSendEmail = async() => {
    toast.info('Sending Mail', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    axios.post('http://localhost:8080/send_mail', {
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
        fullName : this.state.fullName
    })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
        console.error(error);
    });
  }
  render() {
    return (
    <div>
      <center>
        <h1>Send Mail</h1>
        <input 
          type="text"
          value={this.state.fullName}
          onChange={(x)=>this.handleFullName(x)}
          placeholder="Full Name"
          className="enterEmail"
        />
        <br/>
        <input 
          type="email"
          value={this.state.email}
          onChange={(x)=>this.handleEmail(x)}
          placeholder="Email ID"
          className="enterEmail"
        />
        <br/>
        <input 
          type="text"
          value={this.state.subject}
          onChange={(x)=>this.handleSubject(x)}
          placeholder="Subject"
          className="enterEmail"
        />
        <br/>
        <textarea 
          type="text"
          value={this.state.message}
          onChange={(x)=>this.handleMessage(x)}
          placeholder="Enter Message"
          className="enterEmail"
        />
        <br/>
        <button className="sendMail" onClick={() => this.handleSendEmail()}>
          <p>Send</p>
        </button>
      </center>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
    
    );
  }
}
export default withRouter(sendMail);