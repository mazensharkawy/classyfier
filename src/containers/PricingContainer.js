import React, { Component } from "react";
import PricingCard from "../components/PricingCard";
import styled from "styled-components";
import _ from "lodash";
import { connect } from "react-redux";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
`;
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
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

class PricingContainer extends Component {
  render() {
    const { pricingPlans } = this.props;
    return (
      <Container>
        <TitleContainer>
          <h1>BIG TITLE</h1>
          <h5>This a smaller yet longer title under the big title</h5>
        </TitleContainer>

        <CardsContainer>
          {_.map(pricingPlans, (d, index) => (
            <PricingCard data={d} isCurrent={index == 0} />
          ))}
        </CardsContainer>
      </Container>
    );
  }
}
const mapStateToProps = ({ pricing }) => ({
  pricingPlans: pricing.pricingPlans
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(PricingContainer);
