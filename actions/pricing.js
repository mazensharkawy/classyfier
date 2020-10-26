import Server from "next/dist/next-server/server/next-server";
import * as actionTypes from "./actionTypes";
import Server from "../src/server";

export const loadPricingplans = () => {
  return dispatch => {
    return Server.getPricingPlans().then(res => dispatch(setPricing(res)));
  };
};
export const setPricingPlans = plans => ({
  type: actionTypes.SET_PRICING_PLANS,
  payload: plans
});
