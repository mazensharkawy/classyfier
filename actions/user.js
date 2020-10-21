import _ from "lodash";
import Router from "next/router";
import Server from "../src/server";
import * as actionTypes from "./actionTypes";

export const setClientFirstName = first_name => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_CLIENT_FIRST_NAME,
      payload: first_name
    });
    dispatch(validateInput());
  };
};
export const setClientFamilyName = family_name => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_CLIENT_FAMILY_NAME,
      payload: family_name
    });
    dispatch(validateInput());
  };
};
export const setClientEmail = email => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_CLIENT_EMAIL,
      payload: email
    });
    dispatch(validateInput());
  };
};
export const setClientPhone = phone => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_CLIENT_PHONE,
      payload: phone
    });
    dispatch(validateInput());
  };
};

export const setClientPostalCode = postal_code => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_CLIENT_POSTAL_CODE,
      payload: postal_code
    });
    dispatch(validateInput());
  };
};
const resetEmail = () => {
  return {
    type: actionTypes.RESET_EMAIL
  };
};
const resetPostalCode = () => {
  return {
    type: actionTypes.RESET_POSTAL_CODE
  };
};

export const setPassword = password => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_PASSWORD,
      payload: password
    });
    dispatch(validatePassword());
  };
};
export const setConfirmPassword = confirmPassword => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_CONFIRM_PASSWORD,
      payload: confirmPassword
    });
    dispatch(validatePassword());
  };
};

export const signUp = () => {
  return (dispatch, getState) => {
    const {
      deal: { family_name, email, first_name, phone, postal_code, password }
    } = getState();
    Server.signUp({
      first_name,
      family_name,
      email,
      phone,
      postal_code,
      password
    }).then(response => {
      if (response && response.success) {
        Router.push("/");
        return dispatch({
          type: actionTypes.SIGN_UP
        });
      } else return;
    });
  };
};

const invalidFirstName = () => {
  return {
    type: actionTypes.INVALID_FIRST_NAME
  };
};
const invalidFamilyName = () => {
  return {
    type: actionTypes.INVALID_FAMILY_NAME
  };
};
const invalidEmail = () => {
  return {
    type: actionTypes.INVALID_EMAIL
  };
};
const invalidPhone = () => {
  return {
    type: actionTypes.INVALID_PHONE
  };
};
const invalidPostalCode = () => {
  return {
    type: actionTypes.INVALID_POSTAL_CODE
  };
};

const resetUserInfo = () => {
  return {
    type: actionTypes.RESET_USER_DATA
  };
};
const invalidPassword = () => {
  return {
    type: actionTypes.INVALID_PASSWORD
  };
};
const passwordDontMatch = () => {
  return {
    type: actionTypes.PASSWORD_DONT_MATCH
  };
};
const resetPasswordErrors = () => {
  return {
    type: actionTypes.RESET_PASSWORD_ERRORS
  };
};
export const validatePassword = () => {
  return (dispatch, getState) => {
    const {
      deal: { password, confirmPassword }
    } = getState();
    dispatch(resetPasswordErrors());
    if (_.size(password) >= 8) {
      if (confirmPassword === password) {
        dispatch(resetPasswordErrors());
      } else {
        dispatch(passwordDontMatch());
      }
    } else {
      dispatch(invalidPassword());
    }
  };
};
export const validateInput = isLoggedIn => {
  return (dispatch, getState) => {
    const {
      deal: { family_name, email, first_name, phone, postal_code }
    } = getState();
    //family_name, email, first_name, phone, postal_code
    let validData = true;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const postalCodeRegex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    let postcode = _.replace(postal_code, /\s/g, "");
    dispatch(resetUserInfo());
    if (!emailRegex.test(String(email).toLowerCase())) {
      validData = false;
      dispatch(invalidEmail());
    }
    if (!family_name) {
      validData = false;
      dispatch(invalidFamilyName());
    }
    if (!first_name) {
      validData = false;
      dispatch(invalidFirstName());
    }
    if (!phone) {
      validData = false;
      dispatch(invalidPhone());
    }
    if (!postalCodeRegex.test(postcode)) {
      validData = false;
      dispatch(invalidPostalCode());
    }
    // if (validData && isLoggedIn === false) return dispatch(toggleSignUpMode());
    else return;
  };
};
