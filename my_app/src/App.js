import React, { useState } from "react";
import "./index.css";
import axios from 'axios';
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const App = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const [values, setValues]= useState({
    name:'',
    email: '',
    password: ''
  })
  const handleChange = (event) => {
    setValues({...values, [event.target.name]:[event.target.value]})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/App',values)
    .then(res => alert("Registered Successfully!!"))
    .catch(err => console.log(err));
  }
  return (
    <div className={`container ${isSignup ? "right-panel-active" : ""}`}>
      <div className="form-container sign-up-container">
        <form action="" onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FaFacebookF />
            </a>
            <a href="#" className="social">
              <FaGoogle />
            </a>
            <a href="#" className="social">
              <FaTwitter />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
          <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <button type="submit">SignUp</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign In</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FaFacebookF />
            </a>
            <a href="#" className="social">
              <FaGoogle />
            </a>
            <a href="#" className="social">
              <FaTwitter />
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <a href="#">Forgot Your Password</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" onClick={toggleForm}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and start the journey with us</p>
            <button className="ghost" onClick={toggleForm}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
