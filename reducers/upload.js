import * as actionTypes from "../actions/actionTypes";

const initialState = {
  uploaded: false,
  unzipped: false,
  processed: false,
  error: null
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_UPLOADED:
      return { ...state, uploaded: payload };
    case actionTypes.SET_UNZIPPED:
      return { ...state, unzipped: payload };
    case actionTypes.SET_PROCESSED:
      return { ...state, processed: payload };
    case actionTypes.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default reducer;
