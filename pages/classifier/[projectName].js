import React from "react";
import ClassifierContainer from "../../src/containers/classifierContainer";
import { requestNewImage } from "../../actions/index";
class Classifier extends React.Component {
  static getInitialProps = async ({ reduxStore, req, query, res }) => {
    await reduxStore.dispatch(requestNewImage());
    return {};
  };
  render() {
    return <ClassifierContainer />;
  }
}
export default Classifier;
