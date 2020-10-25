import React, { Component } from "react";
import PricingCard from "../components/PricingCard";
import styled from "styled-components";
import _ from "lodash";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100%;
`;
const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
  h1 {
    margin: 0 auto;
  }
  h5 {
    width: 100%;
  }
`;
let DATA = [
  {
    Period: "30 DAY TRIAL",
    Price: "00",
    Members: "free",
    Projects: "1",
    Users: "1",
    Storage: "-",
    More: "-"
  },
  {
    Period: "Personal",
    Price: "20",
    Members: "30",
    Projects: "30",
    Users: "Unlimited",
    Storage: "20GB",
    More: ""
  },
  {
    Period: "Personal",
    Price: "30",
    Members: "Unlimited",
    Projects: "Unlimited",
    Users: "Unlimited",
    Storage: "200GB",
    More: ""
  }
];
class PricingContainer extends Component {
  render() {
    return (
      <Container>
        <TitleContainer>
          <h1>BIG TITLE</h1>
          <h5>This a smaller yet longer title under the big title</h5>
        </TitleContainer>

        <CardsContainer>
          {_.map(DATA, (d, index) => (
            <PricingCard data={d} isCurrent={index == 0} />
          ))}
        </CardsContainer>
      </Container>
    );
  }
}
export default PricingContainer;
