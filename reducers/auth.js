import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loggedIn: false,
  authError: false,
  error: false,
  changed: false,
  token: undefined
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.INIT:
      return {
        ...state,
        loggedIn: !!localStorage.getItem("token"),
        token: localStorage.getItem("token")
      };

    case actionTypes.SIGNIN:
      return {
        ...state,
        loggedIn: true,
        authError: false,
        error: false,
        token: payload.token
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        loggedIn: false
      };
    case actionTypes.SIGNIN_FAILED:
      return {
        ...state,
        loggedIn: false,
        authError: true
      };
    case actionTypes.CHANGE_PASSWORD:
      return {
        ...state,
        error: false,
        changed: true
      };
    case actionTypes.CHANGE_PASSWORD_FAILED:
      return {
        ...state,
        error: true,
        changed: false
      };
    default:
      return state;
  }
};

export default reducer;
