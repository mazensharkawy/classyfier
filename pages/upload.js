import React from "react";
import UploadContainer from "../src/containers/UploadContainer";
class UploadPage extends React.Component {
  static getInitialProps = async ({ reduxStore, req, query, res }) => {
    return {};
  };
  render() {
    return <UploadContainer />;
  }
}
export default UploadPage;
