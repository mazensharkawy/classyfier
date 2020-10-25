import React from "react";
import PricingContainer from "../src/containers/PricingContainer";

class Pricing extends React.Component {
  static getInitialProps = async ({ reduxStore, req, query, res }) => {
    return {};
  };
  render() {
    return <PricingContainer />;
  }
}
export default Pricing;
