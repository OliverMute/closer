import React, { Component } from "react";
import "./sign-up.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
        /* create new user with the specified email and password */
      );

      await createUserProfileDocument(user, { displayName });

      // empty the state after submit

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // check if error
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className={"sign-up"}>
        <h2 className={"sign-up-title"}>I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form className={"sign-up-form"} onSubmit={this.handleSubmit}>
          <FormInput
            type={"text"}
            name={"displayName"}
            value={displayName}
            label={"Display name"}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type={"email"}
            name={"email"}
            value={email}
            label={"Email"}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type={"password"}
            name={"password"}
            value={password}
            label={"Password"}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type={"password"}
            name={"confirmPassword"}
            value={confirmPassword}
            label={"Confirm password"}
            onChange={this.handleChange}
            required
          />
          <CustomButton type={"submit"}>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
