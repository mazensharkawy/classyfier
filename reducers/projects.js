import * as actionTypes from "../actions/actionTypes";


const PROJECTS_PAGE = 0
const CLASSES_PAGE = 1

const initialState = {
    projects: null,
    selectedProject: null,
    page: PROJECTS_PAGE,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_PROJECTS:
      return {
        ...state,
        projects: payload
      };
    case actionTypes.SET_SELECTED_PROJECT:
      return {
        ...state,
        selectedProject: payload
      };
    case actionTypes.TO_CLASSES_PAGE:
      return {
        ...state,
        page: CLASSES_PAGE
      };
    default:
      return state;
  }
};

export default reducer;
