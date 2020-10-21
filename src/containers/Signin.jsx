import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { signin } from "../../actions";
import { LARGE_SCREEN_BREAK_POINT, MOBILE_BREAK_POINT } from "../../config";
import visibility from "../assets/img/visibility.png";
import visibility_off from "../assets/img/visibility_off.png";
import {
  FlexContainer,
  Input,
  InputContainer,
  SubmitButton,
  UserFormContainer
} from "../components/styled";

const Container = styled.div`
  height: 400px;
  width: 25vw;
  margin: 0 auto;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    width: 90vw;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    width: 475px;
  }
`;
const ShowPassword = styled.div`
  display: flex;
  border-radius: 5px;
  align-items: center;
  img {
    width: 18px;
    height: 18px;
    margin: 0 8px;
    border-radius: 5px;
    border: none;
  }
`;
const ErrorText = styled.p`
  color: red;
`;
const SigninSubmitButton = styled(SubmitButton)`
  opacity: ${({ isDisabled }) => (isDisabled ? "0.5" : "1")};
  transform: opacity 1s;
`;
const isValidEmail = email => {
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
};
class Signin extends PureComponent {
  state = {
    isValidEmail: true,
    isValidPassword: true,
    password: "",
    email: "",
    isVisible: false,
    rememberMe: false,
    isDisabled: false
  };
  OnEnterPressed = event => {
    if (event.key === "Enter") this.signin();
  };
  signin = () => {
    const { email, password, rememberMe, isDisabled } = this.state;
    if (isDisabled) return;
    const ReEnableButton = () => this.setState({ isDisabled: false });
    if (!isValidEmail(email) || !password)
      this.setState(
        {
          isValidEmail: isValidEmail(email),
          isValidPassword: !!password || password.length >= 8,
          isDisabled: true
        },
        setTimeout(ReEnableButton, 1000)
      );
    else {
      this.props.signin({ email, password, rememberMe });
      this.setState({ isDisabled: true }, () =>
        setTimeout(ReEnableButton, 1000)
      );
    }
  };
  showPassword = e => {
    this.setState({ isVisible: !this.state.isVisible });
    const passwordInput = document.getElementById("passwordInput");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };
  onChangeInput = event => {
    const name = event.target.name;
    switch (name) {
      case "email":
        return this.setState({ email: event.target.value, isValidEmail: true });
      case "password":
        return this.setState({
          password: event.target.value,
          isValidPassword: true
        });
      case "rememberMe":
        return this.setState(
          {
            rememberMe: !this.state.rememberMe
          },
          () => console.log({ state: this.state })
        );
    }
  };
  render() {
    const {
      email,
      password,
      isValidEmail,
      isValidPassword,
      isVisible,
      isDisabled
    } = this.state;
    const { authError } = this.props;
    return (
      <Container>
        <UserFormContainer isVisible={true} isCentered={true}>
          <form onSubmit={this.signin}>
            <h4>Email:</h4>
            <Input
              onKeyPress={this.OnEnterPressed}
              onChange={this.onChangeInput}
              isValid={isValidEmail}
              value={email}
              type="text"
              name="email"
            />
            <h4>Password</h4>
            <InputContainer isValid={isValidPassword}>
              <Input
                onChange={this.onChangeInput}
                onKeyPress={this.OnEnterPressed}
                value={password}
                type="password"
                id="passwordInput"
                name="password"
                inContainer={true}
              />
              <ShowPassword onClick={this.showPassword}>
                {isVisible ? (
                  <img src={visibility_off} />
                ) : (
                  <img src={visibility} />
                )}
              </ShowPassword>
            </InputContainer>
            <input
              id="remember_me"
              name="rememberMe"
              type="checkbox"
              onChange={this.onChangeInput}
            />
            <label for="remember_me">Remember me</label>
            <FlexContainer>
              {authError ? (
                <ErrorText>Password or Email is incorrect</ErrorText>
              ) : (
                <div />
              )}
              <SigninSubmitButton
                isDisabled={isDisabled}
                width="40%"
                onClick={this.signin}
              >
                Sign in
              </SigninSubmitButton>
            </FlexContainer>
          </form>
        </UserFormContainer>
      </Container>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  authError: auth.authError
});
const mapDispatchToProps = {
  signin
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
