import React, { useState } from "react";
import styled from "styled-components";
import coverImage from "../Images/coverimage2.jpg"; // Adjust the path to your image
import LoginPage from "./LoginPage";

const ForgotPasswordPage = ({ setPasswordCorrect }) => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [signIn, setSignIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    if (email) {
      // add password reset logic here
      setSuccessMessage("Password reset instructions sent to your email");
    } else {
      setErrorMessage("Please provide a valid email");
    }
  };

  return (
    <>
      {!signIn ? (
        <ForgotPasswordPageContainer>
          <CoverImage src={coverImage} alt="Cover" />
          <ForgotPasswordFormContainer>
            <ForgotPasswordForm>
              <h2>Forgot Password ?</h2>
              <p>Enter your email to reset your password</p>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <button onClick={handleResetPassword}>Reset Password</button>
              {successMessage && <SuccessText>{successMessage}</SuccessText>}
              {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
              <SignInLink>
                Remember your password?{" "}
                <a onClick={() => setSignIn(true)}>Sign in here</a>
              </SignInLink>
            </ForgotPasswordForm>
          </ForgotPasswordFormContainer>
        </ForgotPasswordPageContainer>
      ) : (
        <LoginPage setPasswordCorrect={setPasswordCorrect} />
      )}
    </>
  );
};

const ForgotPasswordPageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ForgotPasswordFormContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 400px;
`;

const ForgotPasswordForm = styled.form`
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

const SuccessText = styled.p`
  color: green;
  margin-top: 0.5rem;
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 0.5rem;
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

export default ForgotPasswordPage;
