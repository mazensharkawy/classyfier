import "react";
import Header from "../components/Header";

export default props => (
  <React.Fragment>
    <Header />
    {props.children}
  </React.Fragment>
);
