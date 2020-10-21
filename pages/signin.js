import { withRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import SubHeader from "../src/components/Header/SubHeader";
import Signin from "../src/containers/Signin";



const Container = styled.div`
  background: #fafafa;
`;

const SUB_HEADER_TITLE = "Sign in ";
const SUB_HEADER_SUB_TITLE =
  "Sign in to see your previous quotes and save new ones";
class Quote extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <SubHeader title={SUB_HEADER_TITLE} subTitle={SUB_HEADER_SUB_TITLE} />
        <Signin />
        <Footer />
      </Container>
    );
  }
}

export default withRouter(Quote);
