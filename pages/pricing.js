import React from "react";
import PricingContainer from "../src/containers/PricingContainer";
import { loadPricingplans } from "../actions/pricing";
class Pricing extends React.Component {
  static getInitialProps = async ({ reduxStore, req, query, res }) => {
    reduxStore.dispatch(loadPricingplans());
    return {};
  };
  render() {
    return <PricingContainer />;
  }
}
export default Pricing;
