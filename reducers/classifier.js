import * as actionTypes from "../actions/actionTypes";

const initialState = {
  selectedClass: null,
  img: null,
  classes: [],
  imagesRemaining: 0
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LOAD_NEW_IMAGE:
      return { ...payload };
    case actionTypes.SET_SELECTED_CLASS:
      return { ...state, selectedClass: payload };
    default:
      return state;
  }
};

export default reducer;
