import moment from "moment";
import Router from "next/router";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  LARGE_SCREEN_BREAK_POINT,
  LARGE_SCREEN_WIDTH,
  MOBILE_BREAK_POINT,
  NORMAL_SCREEN_WIDTH,
  PRIMARY_COLOR,
  TABLET_CONDITION
} from "../../../config";

const FooterSection = styled.div`
  width: 100vw;
  height: ${({ isPreFooter }) => (isPreFooter ? "20vw" : "auto")};
  color: white;
  background: ${({ isPreFooter }) => (isPreFooter ? PRIMARY_COLOR : "black")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-weight: bold;
    margin: 2vw auto;
  }
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    height: ${({ isPreFooter }) => (isPreFooter ? "65vw" : "auto")};
    h2{
      margin: 5vw auto;
    }
  }
  @media only screen and ${TABLET_CONDITION} {
    height: ${({ isPreFooter }) => (isPreFooter ? "30vw" : "auto")};
    h2{
      margin: 3vw auto;
    }
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    height: ${({ isPreFooter }) => (isPreFooter ? "450px" : "auto")};
    h2{
      margin: 30px auto;
    }
  
  }
`;

const PreFooterContainer = styled.div`
  width: 100%;
  text-align: center;
`;
const FooterContainer = styled.div`
  width: ${NORMAL_SCREEN_WIDTH};
  margin: 0 auto;
  display: flex;
  padding: 100px 0;
  justify-content: space-around;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    padding: 15.5vw 0 0 0;
    display: block;
  }
 
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    width: ${LARGE_SCREEN_WIDTH};
  }
  h3 {
    font-weight: bold;
  }
  img {
    height: 50px;
    padding: 0px 10px;
    @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
      margin-left: 5vw;
      padding: 0;
    }
  }
  a {
    cursor: pointer;
    color: #aaaeb8;
    margin: 0.8em 0;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  width: 650px;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    width: 90vw;
    padding: 5vw;
    div {
      margin: 10px;
    }
    div:nth-child(3) {
      display: block;
      a {
        margin: 5px;
      }
    }
  }
  @media only screen and ${TABLET_CONDITION} {
    width: 47vw;
    div {
      margin-right: 4vw;
    }
  }
`;
const GetInTouchButton = styled.a`
  color: ${PRIMARY_COLOR};
  background: white;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  border-radius: 2vw;
  padding: 1.2vw 3vw;
  margin: 25px auto;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    padding: 3.2vw 5vw;
    border-radius: 5vw;
  }
  @media only screen and ${TABLET_CONDITION} {
    padding: 1.5vw 3vw;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    padding: 19.2px 57.6px;
  }
`;
const Copyright = styled.div`
  width: 900px;
  margin: 10% auto;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    width: 100vw;
    padding: 6vw 2vw;
  }
`;
class index extends PureComponent {
  redirectToWizard = () => {
    Router.push("/wizard")
  }
  render() {
    return (
      <footer>
        <FooterSection isPreFooter={true}>
          <PreFooterContainer>
            <h2>Looking for a specific car? We can help you with that!</h2>
            <GetInTouchButton onClick={this.redirectToWizard}>
              Open Wizard
            </GetInTouchButton>
          </PreFooterContainer>
        </FooterSection>
        <FooterSection>
          <FooterContainer>
            {/* <img src={logo} /> */}
            <FlexContainer>
              <div>
                <h4>Company</h4>
                <a>About</a>
                <a>Careers</a>
                <a>Contact us</a>
              </div>
              <div>
                <h4>Legal</h4>
                <a>Terms &amp; conditions</a>
                <a>Privacy policy</a>
                <a>Use of cookies</a>
                <a>Complaints procedure</a>
                <a>Treatment of customers</a>
              </div>
              <div>
                <h4>Connect</h4>
                <a>Linkedin</a>
                <a>Twitter</a>
                <a>Facebook</a>
              </div>
              <Copyright>
                <p>
                  Copyright © {moment().year()} Leasing Deals All Rights
                  Reserved.
                </p>
              </Copyright>
            </FlexContainer>
          </FooterContainer>
        </FooterSection>
      </footer>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchProps = {};
export default connect(null, mapDispatchProps)(index);
