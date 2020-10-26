import * as actionTypes from "../actions/actionTypes";

const initialState = {
  pricingPlans: []
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_PRICING_PLANS:
      return { ...state, pricingPlans: payload };
    default:
      return state;
  }
};

export default reducer;
