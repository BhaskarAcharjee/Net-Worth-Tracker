import React, { useState } from "react";
import styled from "styled-components";
import coverImage from "../Images/coverimage.jpg";
import logo from "../Images/report.webp";
import ForgotPasswordPage from "./ForgotPassword";
import SignUpPage from "./SignUpPage";
import { useGlobalContext } from "../context/globalContext";

const LoginPage = ({ setPasswordCorrect }) => {
  const { login } = useGlobalContext();
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

  const handleLogin = async (e) => {
    e.preventDefault();
    login(email, password, setPasswordCorrect, setErrorMessage);
  };

  // Need to improve logic
  const handleGuestLogin = () => {
     // Login the user as a guest (temporary)
    const guestEmail = "guest@capitalclarity.com";
    const guestPassword = "Welcome@123";
    login(guestEmail, guestPassword, setPasswordCorrect, setErrorMessage);
  };

  return (
    <>
      {!forgotPassword && !signUp ? (
        <LandingPageContainer>
          <ContentWrapper>
            <LeftContainer>
              <Content>
                <Logo src={logo} alt="Capital Clarity Logo" />
                <Title>Track Your Net Worth</Title>
                <Subtitle>
                  Welcome to <b>Capital Clarity</b> <br />— The ultimate tool to
                  monitor your financial health.
                </Subtitle>
                <FeaturesList>
                  <FeatureItem>🔍 Detailed Financial Insights</FeatureItem>
                  <FeatureItem>📈 Real-time Net Worth Calculation</FeatureItem>
                  <FeatureItem>📊 Comprehensive Asset Management</FeatureItem>
                </FeaturesList>
                <GuestLoginButton onClick={handleGuestLogin}>
                  Preview Demo
                </GuestLoginButton>
              </Content>
            </LeftContainer>
            <RightContainer>
              <LoginFormContainer>
                <LoginForm onSubmit={handleLogin}>
                  <FormTitle>Login to Your Account</FormTitle>
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
                  <Button type="submit">Login</Button>
                  {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
                  <SignupLink>
                    Not a user?{" "}
                    <Anchor onClick={() => setSignUp(true)}>
                      Sign up here
                    </Anchor>
                  </SignupLink>
                  <ForgotPasswordLink>
                    <Anchor onClick={() => setForgotPassword(true)}>
                      Forgot password?
                    </Anchor>
                  </ForgotPasswordLink>
                </LoginForm>
              </LoginFormContainer>
            </RightContainer>
          </ContentWrapper>
        </LandingPageContainer>
      ) : signUp ? (
        <SignUpPage setPasswordCorrect={setPasswordCorrect} />
      ) : (
        <ForgotPasswordPage setPasswordCorrect={setPasswordCorrect} />
      )}
    </>
  );
};

const LandingPageContainer = styled.div`
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

const Logo = styled.img`
  width: 200px;
  margin-bottom: 1rem;
  margin-top: -5rem;
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

const LoginFormContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  width: 400px;
`;

const LoginForm = styled.form`
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

const SignupLink = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  text-align: center;
`;

const ForgotPasswordLink = styled.p`
  font-size: 0.8rem;
  line-height: 2rem;
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

const GuestLoginButton = styled.button`
  margin-top: 1rem;
  padding: 0.7rem 1rem;
  background: blue;
  color: #fff;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: blueviolet;
  }
`;

export default LoginPage;
