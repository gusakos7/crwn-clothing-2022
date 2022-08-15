import { ChangeEvent, FormEvent, useState } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.tsx";
import Button from "../button/button.component";
import { signUpStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";
import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    console.log("ELEOS");

    try {
      dispatch(signUpStart(email, password, displayName));
      setFormFields(defaultFormFields);
    } catch (error) {
      console.log(error);
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in use");
      } else {
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <SignUpContainer>
      <h1>Don't have an account?</h1>

      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          onChange={handleChange}
          name="displayName"
          required
          type="text"
          value={displayName}
        />
        <FormInput
          label="Email"
          onChange={handleChange}
          name="email"
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
          value={password}
        />
        <FormInput
          label="Confirm Password"
          required
          onChange={handleChange}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
