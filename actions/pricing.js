import * as actionTypes from "./actionTypes";
import Server from "../src/server";

export const loadPricingPlans = () => {
  return dispatch => {
    return Server.loadPricingPlans().then(res => {
      dispatch(setPricingPlans(res.pricingPlans));
    });
  };
};
export const setPricingPlans = plans => ({
  type: actionTypes.SET_PRICING_PLANS,
  payload: plans
});
