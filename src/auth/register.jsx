import React from "react";
import { withRouter } from "react-router-dom";
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
  //WRITE YOUR OWN FIREBASE PROJECT CONFIGURATION
};

const app = initializeApp(firebaseConfig);

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  navigateTo = (val) => {
    //this.props.history.push(val);
    if(val == "login"){
        this.props.history.push("/login");
    }
    if(val == "register"){
        this.props.history.push("/register");
    }
  }
  handleEmail = (x) => {
    //console.log(x.target.value.length)
    this.setState({ email: x.target.value });
  };
  handlePassword = (x) => {
    //console.log(x.target.value.length)
    this.setState({ password: x.target.value });
  };
  handleSuccessfulRegistration = (response) => {
    toast.success('Account Created', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    console.log(response.user)
    let temp = response.user
    localStorage.setItem("user_data", JSON.stringify(temp));
    this.props.history.push("/profile")
  }
  handleRegister = () => {
    let eid = this.state.email
    var psd = this.state.password

    if(eid.length<5 || psd.length<8){
      toast.error('Invalid Email ID / Password', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    else{
      const auth = getAuth(app)
      createUserWithEmailAndPassword(auth, eid, psd)
        .then((response) => this.handleSuccessfulRegistration(response))
        .catch((error) => {
          console.log("Error IS ====>", error);
          toast.warn('Registration Failed', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        })
    }
  }
  handleGoogleRegister = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((x) => this.handleSuccessfulRegistration(x))
      .catch((error) => {
        console.log("Error IS ====>", error);
      })
  }
  render() {
    return (
    <div>
      <center>
        <h1>Register</h1>
        <input 
          type="text"
          value={this.state.email}
          onChange={(x)=>this.handleEmail(x)}
          placeholder="Email ID"
          className="enterEmail"
        />
        <br/>
        <input 
          type="password"
          value={this.state.password}
          onChange={(x)=>this.handlePassword(x)}
          placeholder="Password"
          className="enterEmail"
        />
        <br/>
        <button className="sendMail" onClick={() => this.handleRegister()}>
          <p>Register</p>
        </button>
        <br/>
        <button className="googleLogin" onClick={() => this.handleGoogleRegister()}>
          <p>Sign Up with Google</p>
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
export default withRouter(Register);