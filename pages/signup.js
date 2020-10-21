import { withRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import SubHeader from "../src/components/Header/SubHeader";
import SignupForm from "../src/containers/Signup";

const Container = styled.div`
  background: #fafafa;
`;

const SUB_HEADER_TITLE = "Sign up ";
const SUB_HEADER_SUB_TITLE = "Create an account";
class Quote extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <SubHeader title={SUB_HEADER_TITLE} subTitle={SUB_HEADER_SUB_TITLE} />
        <SignupForm />
        <Footer />
      </Container>
    );
  }
}

export default withRouter(Quote);
