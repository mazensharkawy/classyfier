import * as actionTypes from "../actions/actionTypes";

const initialState = {
    projects: null
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_PROJECTS:
      return {
        ...state,
        projects: payload
      };
    default:
      return state;
  }
};

export default reducer;
