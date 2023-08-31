import React, { useState } from "react";
import styled from "styled-components";
import coverImage from "../Images/coverimage.jpg";
import ForgotPasswordPage from "./ForgotPassword";
import SignUpPage from "./SignUpPage";
import axios from "axios";
import { useGlobalContext } from "../context/globalContext";

const LoginPage = ({ setPasswordCorrect }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage("");
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/login", {
        email,
        password,
      });

      if (response.data.message === "Login successful") {
        setPasswordCorrect(true);
      } else {
        setErrorMessage("Invalid credentials");
      }
    } catch (error) {
      setErrorMessage("User not existed");
    }
  };

  return (
    <LoginPageContainer>
      <CoverImage src={coverImage} alt="Cover" />
      <LoginFormContainer>
        {!forgotPassword && !signUp ? (
          <LoginForm>
            <h2>
              Welcome to
              <br /> Net Worth Tracker
            </h2>
            <p>Login to access your account</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button onClick={handleLogin}>Login</button>
            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
            {/* <p>{error && <p className="error">{error}</p>}</p> */}
            <SignupLink>
              Not a user?{" "}
              <a href="#" onClick={() => setSignUp(true)}>
                Sign up here
              </a>
            </SignupLink>
            <ForgotPasswordLink>
              <a href="#" onClick={() => setForgotPassword(true)}>
                Forgot password?
              </a>
            </ForgotPasswordLink>
          </LoginForm>
        ) : signUp ? (
          <SignUpPage setPasswordCorrect={setPasswordCorrect} />
        ) : (
          <ForgotPasswordPage setPasswordCorrect={setPasswordCorrect} />
        )}
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-height: 100vh;
`;

const CoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const LoginFormContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 400px;
`;

const LoginForm = styled.form`
  h2 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: #555;
    font-size: 1.1rem;
  }

  input {
    width: 100%;
    padding: 0.7rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    width: 100%;
    padding: 0.7rem;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #0056b3;
    }
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 0.5rem;
`;

const SignupLink = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ForgotPasswordLink = styled.p`
  font-size: 0.9rem;

  a {
    color: #555;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default LoginPage;
