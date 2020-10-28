import React from "react";
import PricingContainer from "../src/containers/PricingContainer";
import { loadPricingPlans } from "../actions/pricing";
class Pricing extends React.Component {
  static getInitialProps = async ({ reduxStore, req, query, res }) => {
    await reduxStore.dispatch(loadPricingPlans());
    return {};
  };
  render() {
    return <PricingContainer />;
  }
}
export default Pricing;
