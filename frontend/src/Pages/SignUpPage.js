import React, { useState } from "react";
import styled from "styled-components";
import coverImage from "../Images/coverimage2.jpg";
import LoginPage from "./LoginPage";
import { useGlobalContext } from "../context/globalContext";

const SignUpPage = ({ setPasswordCorrect }) => {
  const { signUp } = useGlobalContext();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signIn, setSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    setErrorMessage("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setErrorMessage("");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    signUp(
      fullName,
      email,
      password,
      confirmPassword,
      setPasswordCorrect,
      setErrorMessage
    );
  };

  return (
    <>
      {!signIn ? (
        <SignUpPageContainer>
          <ContentWrapper>
            <LeftContainer>
              <Content>
                <Title>Join Capital Clarity</Title>
                <Subtitle>
                  Sign up to start tracking your net worth <br /> and managing
                  your financial health.
                </Subtitle>
                <FeaturesList>
                  <FeatureItem>🔍 Detailed Financial Insights</FeatureItem>
                  <FeatureItem>📈 Real-time Net Worth Calculation</FeatureItem>
                  <FeatureItem>📊 Comprehensive Asset Management</FeatureItem>
                </FeaturesList>
              </Content>
            </LeftContainer>
            <RightContainer>
              <SignUpFormContainer>
                <SignUpForm onSubmit={handleSignUp}>
                  <FormTitle>Create an Account</FormTitle>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={handleFullNameChange}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                  <Button type="submit">Sign Up</Button>
                  {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
                  <SignInLink>
                    Already have an account?{" "}
                    <Anchor onClick={() => setSignIn(true)}>
                      Sign in here
                    </Anchor>
                  </SignInLink>
                </SignUpForm>
              </SignUpFormContainer>
            </RightContainer>
          </ContentWrapper>
        </SignUpPageContainer>
      ) : (
        <LoginPage setPasswordCorrect={setPasswordCorrect} />
      )}
    </>
  );
};

const SignUpPageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: url(${coverImage}) no-repeat center center;
  background-size: cover;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 3rem;
  background: rgba(0, 0, 0, 0.5);
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 2rem;
`;

const Content = styled.div`
  max-width: 600px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
  line-height: 1.2;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const FeatureItem = styled.li`
  font-size: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignUpFormContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  width: 400px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background: #f9f9f9;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 0.5rem;
  text-align: center;
`;

const SignInLink = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  text-align: center;
`;

const Anchor = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default SignUpPage;
