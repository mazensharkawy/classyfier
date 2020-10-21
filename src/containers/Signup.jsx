import _ from "lodash";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  setClientEmail,
  setClientFamilyName,
  setClientFirstName,
  setClientPhone,
  setClientPostalCode,
  setConfirmPassword,
  setPassword,
  signUp,
  validatePassword
} from "../../actions";
import {
  ErrorMessage,
  FailMessage,
  FlexContainer,
  GetQuoteButton,
  Input,
  UserFormContainer
} from "../components/styled";

class SignupForm extends PureComponent {
  handleSignUp = () => {
    const {
      signUp,
      isValidEmail,
      isValidFamilyName,
      isValidFirstName,
      isValidPhone,
      isValidPostalCode,
      isValidPassword,
      passwordsMatching
    } = this.props;
    if (
      isValidEmail &&
      isValidFamilyName &&
      isValidFirstName &&
      isValidPhone &&
      isValidPostalCode &&
      setPassword &&
      isValidPassword &&
      passwordsMatching
    ) {
      signUp();
    }
  };
  render() {
    const {
      isValidEmail,
      isValidFamilyName,
      isValidFirstName,
      isValidPhone,
      isValidPostalCode,
      isValidPassword,
      passwordsMatching,
      setClientFirstName,
      setClientFamilyName,
      setClientEmail,
      setClientPhone,
      setClientPostalCode,
      setPassword,
      setConfirmPassword,
      success,
      fail
    } = this.props;
    const setFirstName = _.debounce(value => setClientFirstName(value), 750);
    const setFamilyName = _.debounce(value => setClientFamilyName(value), 750);
    const setEmail = _.debounce(value => setClientEmail(value), 750);
    const setPhone = _.debounce(value => setClientPhone(value), 750);
    const setPostalCode = _.debounce(value => setClientPostalCode(value), 750);
    const setUserPassword = _.debounce(value => {
      setPassword(value);
    }, 400);
    const setUserConfirmPassword = _.debounce(value => {
      setConfirmPassword(value);
    }, 400);
    return (
      <UserFormContainer isCentered={true}>
        <FlexContainer>
          <div>
            <h4>First name</h4>
            <Input
              type="text"
              name="first_name"
              onChange={event => setFirstName(event.target.value)}
              isValid={isValidFirstName}
            />
          </div>
          <div>
            <h4>Family name</h4>
            <Input
              type="text"
              name="family_name"
              onChange={event => setFamilyName(event.target.value)}
              isValid={isValidFamilyName}
            />
          </div>
        </FlexContainer>
        <h4>Email</h4>
        <Input
          type="text"
          name="email"
          onChange={event => setEmail(event.target.value)}
          isValid={isValidEmail}
        />
        {!isValidEmail ? <ErrorMessage>Invalid email</ErrorMessage> : ""}
        <FlexContainer>
          <div>
            <h4>Phone number</h4>
            <Input
              type="text"
              name="phone"
              onChange={event => setPhone(event.target.value)}
              isValid={isValidPhone}
            />
          </div>
          <div>
            <h4>Postal Code</h4>
            <Input
              type="text"
              name="postcode"
              onChange={event => setPostalCode(event.target.value)}
              isValid={isValidPostalCode}
            />
            {!isValidPostalCode ? (
              <ErrorMessage>Invalid UK postal code</ErrorMessage>
            ) : (
              ""
            )}
          </div>
        </FlexContainer>
        <h4>Password:</h4>
        <Input
          type="password"
          name="password"
          onChange={event => setUserPassword(event.target.value)}
          isValid={isValidPassword}
        />
        <h4>Confirm password</h4>
        <Input
          type="password"
          onChange={event => setUserConfirmPassword(event.target.value)}
          name="confirmPassword"
          isValid={passwordsMatching}
        />
        {isValidPassword ? (
          ""
        ) : (
          <ErrorMessage>Password must be atleast 8 characters</ErrorMessage>
        )}
        {passwordsMatching ? (
          ""
        ) : (
          <ErrorMessage>Passwords must match</ErrorMessage>
        )}
        {fail ? <FailMessage>Sign up failed</FailMessage> : ""}
        {success ? (
          <GetQuoteButton>Signed up successfully</GetQuoteButton>
        ) : (
          <GetQuoteButton onClick={this.handleSignUp}>Sign up</GetQuoteButton>
        )}
      </UserFormContainer>
    );
  }
}
const mapStateToProps = ({ deal }) => {
  return {
    success: deal.success,
    fail: deal.fail,
    isValidEmail: deal.isValidEmail,
    isValidFirstName: deal.isValidFirstName,
    isValidFamilyName: deal.isValidFamilyName,
    isValidPhone: deal.isValidPhone,
    isValidPostalCode: deal.isValidPostalCode,
    signUp: deal.signUp,
    isValidPassword: deal.isValidPassword,
    passwordsMatching: deal.passwordsMatching
  };
};
const mapDispatchToProps = {
  setClientFirstName,
  setClientFamilyName,
  setClientEmail,
  setClientPhone,
  setClientPostalCode,
  setPassword,
  setConfirmPassword,
  signUp,
  validatePassword
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
