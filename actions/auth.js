import _ from "lodash";
import Router from "next/router";
import Server from "../src/server";
import * as actionTypes from "./actionTypes";
// import { loading, toggleDialog } from "./dialog";
// import { setUserInfo } from "./user";

export const signinAction = payload => {
  return {
    type: actionTypes.SIGNIN,
    payload
  };
};

const signoutAction = () => {
  return {
    type: actionTypes.LOGOUT
  };
};

const loginFailed = () => {
  return {
    type: actionTypes.SIGNIN_FAILED,
    error: true
  };
};

export const init = () => {
  return dispatch =>
    dispatch({
      type: actionTypes.INIT
    });
};
export const logout = () => {
  return dispatch => {
    localStorage.removeItem("token");
    Server.signout()
      .then(response => {
        dispatch(signoutAction(response.data));
      })
      .catch(err => {
        dispatch(loginFailed());
      });
  };
};
export const signin = ({ email, password, rememberMe = false }) => {
  return async dispatch => {
    // const token = localStorage.getItem("token");
    // if (!token && !(email && password)) return;
    // Server.signin({ email, password, token, remember: rememberMe })
    try {
      const response = await Server.signin({
        email,
        password,
        remember: rememberMe
      });
      if (response && response.token) {
        localStorage.setItem("token", response.token);
        dispatch(signinAction(response));
        // dispatch(setUserInfo(response.user));
        Router.push("/");
      } else if (response && response.user) {
        dispatch(signinAction({ ...response, token }));
        // dispatch(setUserInfo(response.user));
      } else {
        localStorage.removeItem("token");
        dispatch(loginFailed());
        !_.includes(router.asPath, "signin") && Router.push("/signin");
      }
    } catch (err) {
      dispatch(loginFailed());
    }
  };
};
export const changePassAction = payload => {
  return {
    type: actionTypes.CHANGE_PASSWORD,
    payload: payload
  };
};

const changePassFailed = () => {
  return {
    type: actionTypes.CHANGE_PASSWORD_FAILED,
    error: true
  };
};
export const changePassword = form => {
  return dispatch => {
    // Server.changePassword(form)
    //   .then(response => {
    //     dispatch(changePassAction(response.data));
    //     dispatch(toggleDialog(true));
    //     dispatch(loading(false));
    //   })
    //   .catch(err => {
    //     dispatch(changePassFailed());
    //     dispatch(toggleDialog(true));
    //     dispatch(loading(false));
    //   });
  };
};
