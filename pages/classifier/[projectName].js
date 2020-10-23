import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  discard,
  classify,
  selectClass,
  requestNewImage
} from "../../actions/classifier";
import { LARGE_SCREEN_BREAK_POINT, MOBILE_BREAK_POINT } from "../../config";
import _ from "lodash";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Controls = styled.div`
  display: flex;
  flex-direction: column;
`;
const OptionsContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 4vw;
  padding: 2vw 2vw;
  position: sticky;
  top: 0;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    width: 100%;
    border-radius: 6vw;
    padding: 0 2vw 2vw 2vw;
    position: relative;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    border-radius: 36px;
    padding: 38.4px 19.2px;
  }
  width: 30vw;
  margin: 0 auto;
  label {
    margin-top: 10px;
    display: block;
  }
`;
const Img = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  img {
    width: 300px;
    border-radius: 1vw;
    object-fit: cover;
    height: fit-content;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 300px;
`;
const Button = styled.button`
  color: white;
  cursor: pointer;
  background: gray;
  text-align: center;
  border-radius: 10px;
  padding: 1.2vw 1.2vw;
  font-weight: 500;
  font-size: 1vw;
  margin: 3px 0;
  border: none;
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    border-radius: 13px;
    font-size: 18px;
    padding: 23px;
  }
`;

class Classifier extends React.Component {
  static getInitialProps = async ({ reduxStore, req, query, res }) => {
    await reduxStore.dispatch(requestNewImage());
    return {};
  };
  render() {
    const { classify, selectClass, discard, img, classes } = this.props;
    return (
      <Container>
        <Img>
          <img src={img} alt="car image" />
        </Img>
        <Controls>
          <OptionsContainer>
            <div style={{ margin: "0 auto", width: "fit-content" }}>
              {_.map(classes, classOption => (
                <label>
                  <input
                    type="radio"
                    name="classes"
                    value={classOption}
                    checked={selectedClass === classOption}
                    onChange={selectClass}
                  />
                  {_.upperFirst(classOption)}
                </label>
              ))}
            </div>
            <ButtonContainer>
              <Button onClick={discard}>Discard Image</Button>
              <Button onClick={classify}>Submit</Button>
            </ButtonContainer>
          </OptionsContainer>
        </Controls>
      </Container>
    );
  }
}

const mapStateToProps = ({ classifier }) => ({
  img: classifier.img,
  classes: classifier.classes
});
const mapDispatchToProps = {
  classify,
  selectClass,
  discard
};
export default connect(mapStateToProps, mapDispatchToProps)(Classifier);
