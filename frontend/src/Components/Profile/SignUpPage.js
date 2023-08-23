import React, { useState } from "react";
import styled from "styled-components";
import coverImage from "../../img/coverimage.jpg";
import LoginPage from "./LoginPage";

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signIn, setSignIn] = useState(false);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = () => {
    // Add your sign-up logic here
  };

  return (
    <SignUpPageContainer>
      <CoverImage src={coverImage} alt="Cover" />
      <SignUpFormContainer>
        {!signIn ? (
          <SignUpForm>
            <h2>Create an Account</h2>
            <p>Sign up to start tracking your net worth</p>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
              required
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <SignUpButton onClick={handleSignUp}>Sign Up</SignUpButton>
            <SignInLink>
              Already have an account?{" "}
              <a href="#" onClick={() => setSignIn(true)}>
                Sign in here
              </a>
            </SignInLink>
          </SignUpForm>
        ) : (
          <LoginPage />
        )}
      </SignUpFormContainer>
    </SignUpPageContainer>
  );
};

const SignUpPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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

const SignUpFormContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 400px;
`;

const SignUpForm = styled.form`
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

  /* ... rest of the styling */
`;

const SignUpButton = styled.button`
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
`;

const SignInLink = styled.p`
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

export default SignUpPage;
