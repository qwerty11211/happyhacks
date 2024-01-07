import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

import axios from "axios";

export default class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: "",
         password: "",
      };
      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   onChange = (e) => this.setState({ [e.target.name]: e.target.value });
   handleSubmit(event) {
      axios
         .post("http://localhost:8000/api/token/", {
            username: this.state.email,
            password: this.state.password,
         })
         .then(function (res) {
            console.log(res);
            localStorage.setItem("refresh_token", res.data.refresh);
            localStorage.setItem("user", res.config.data);
         })
         .catch(function (err) {
            console.log(err);
         });
      event.preventDefault();
   }
   render() {
      return (
         <div className='main'>
            <div className='form form-shadow'>
               <h2>Login</h2>
               <div className='input'>
                  <div className='inputBox' controlId='formBasicEmail'>
                     <label>Username</label>
                     <input type='text' name='email' placeholder='Enter username' value={this.state.email} onChange={this.onChange} />
                  </div>
                  <div className='inputBox' controlId='formBasicPassword'>
                     <label>Password</label>
                     <input type='password' placeholder='********' name='password' value={this.state.password} onChange={this.onChange} />
                  </div>

                  <div className='inputBox'>
                     <Button type='submit' onClick={this.handleSubmit}>
                        <Link to={"/dashboard"}>Submit</Link>
                     </Button>
                  </div>
               </div>
               <p className='forget'>
                  Not Registered? <Link to={"/register"}> Click here</Link>
               </p>
               <p className='forget'>
                  Forgot Password? <a href='#'> Click here</a>
               </p>
            </div>
         </div>
      );
   }
}
