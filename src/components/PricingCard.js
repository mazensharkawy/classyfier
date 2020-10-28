import React, { Component } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 15vw;
  border-radius: 20px;
  border: thick solid #646567;
  margin: 0 50px;
`;
const Header = styled.div`
  padding-left: 30px;
  padding-right: 30px;

  color: black;
  font-weight: bold;

  h6 {
    font-sie: 12px;
  }

  h3 {
    font-size: 35px;
    text-align: center;
    margin: 45px 0;
  }
  span:nth-child(1) {
    font-size: 10px;
  }
  span {
    font-size: 12px;
    color: #9fa1a0;
  }
`;
const Features = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  font-size: 12px;

  div:last-child {
    border-bottom: none;
    margin-bottom: 30px;
  }
`;
const Feature = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid gray;

  p {
    font-weight: 700;
    color: #9fa1a0;
  }
`;
const Footer = styled.div`
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 0;
  padding-left: 0px;
  padding-right: 0px;

  background: #646567;
  color: ${({ isCurrent }) => (isCurrent ? "orange" : "white")};

  border-radius: 0 0 10px 10px;
  border: thick solid #646567;
  font-size: 12px;
`;
class PricingCard extends Component {
  render() {
    const { data, isCurrent } = this.props;
    const { Period, Price, Members, Projects, Users, Storage, More } = data;
    return (
      <CardContainer>
        <Header>
          <h6>{Period}</h6>
          <h3>
            <span>$ </span>
            {Price}
            <span> /month</span>
          </h3>
        </Header>
        <Features>
          <Feature>
            <p>Members</p>
            <p>{Members}</p>
          </Feature>
          <Feature>
            <p>Projects</p>
            <p>{Projects}</p>
          </Feature>
          <Feature>
            <p>Users</p>
            <p>{Users}</p>
          </Feature>
          <Feature>
            <p>Storage</p>
            <p>{Storage}</p>
          </Feature>
          <Feature>
            <p>More</p>
            <p>{More}</p>
          </Feature>
        </Features>

        <Footer isCurrent={isCurrent}>
          <p>Current plan</p>
        </Footer>
      </CardContainer>
    );
  }
}
export default PricingCard;
