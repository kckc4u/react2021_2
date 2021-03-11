import React, { Component } from "react";

import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";
import "./signin.style.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";

export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({email: '', password: ''});

    } catch (error) {
        console.log(error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form className="sign-in-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            handlechange={this.handleChange}
            type="email"
            name="email"
            value={this.state.email}
            required
          />
          <FormInput
            label="Password"
            handlechange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            required
          />
          <div className="custom-buttons">
            <CustomButton type="submit" name="submit">
              Signin
            </CustomButton>
            <CustomButton type="button" isGoogleBtn={true} onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
