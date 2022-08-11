import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log(error);
      }
    }
  };

  const handleChange = ({ target: { value, name } }) => {
    setFormFields(prevState => ({ ...prevState, [name]: value }));
  };

  console.log(formFields);

  return (
    <div className="sign-up-container">
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          onChange={handleChange}
          name="displayName"
          id="displayName"
          required
          type="text"
          value={displayName}
        />
        <FormInput
          label="Email"
          onChange={handleChange}
          name="email"
          id="email"
          required
          type="email"
          value={email}
        />
        <FormInput
          label="Password"
          onChange={handleChange}
          required
          type="password"
          name="password"
          id="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          required
          onChange={handleChange}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
