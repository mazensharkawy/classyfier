import "react";
import styled from "styled-components";
import {
  LARGE_SCREEN_BREAK_POINT,
  MOBILE_BREAK_POINT,
  PRIMARY_COLOR,
  TABLET_CONDITION
} from "../../../config";
const SubHeader = styled.div`
  display: flex;
  width: 100vw;
  background: ${PRIMARY_COLOR};
  flex-direction: column;
  justify-content: center;
  color: white;
  height: 18vw;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    padding-bottom: 4vw;
  }
  @media only screen and ${TABLET_CONDITION} {
    justify-content: space-evenly;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    height: 345px;
  }
  h1 {
    font-weight: bold;
    margin: 20px auto;
    @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
      font-size: 3em;
    }
  }
  p {
    font-size: 1.2em;

    @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
      font-size: 27px;
    }
  }
`;
const TextContainer = styled.div`
  text-align: center;
  justify-content: center;
  min-width: 35%;
  margin: 2vw 0;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    width: 100%;
  }
`;
const Ticks = styled.div`
  display: flex;
  width: fit-content;
  margin: 0 auto;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    display: block;
  }
  @media only screen and ${TABLET_CONDITION} {
    display: block;
  }
`;
const ImageArea = styled.div`
  height: 100%;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    height: 40%;
  }
  img {
    height: 100%;
    width: auto;
    border-radius: 3vw;
    @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
      margin: 0 auto;
      height: 100%;
      border-radius: 5vw;
    }

    @media only screen and ${TABLET_CONDITION} {
      border-radius: 4vw;
    }
    @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
      border-radius: 56px;
    }
  }
`;
const TickRow = styled.div`
  display: flex;
  margin-bottom: 2vw;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    justify-content: space-betwene;
  }
  img {
    width: 2vw;
    height: 2vw;
    margin: 0 0.75vw 0 0.75vw;
    @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
      width: 7vw;
      height: 7vw;
    }
    @media only screen and ${TABLET_CONDITION} {
      width: 3vw;
      height: 3vw;
    }
    @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
      width: 38px;
      height: 38px;
      margin: 0 15px 0 15px;
    }
  }
  p {
    height: fit-content;
    margin: 0;
    color: ${({ isWhiteText }) => (isWhiteText ? "white" : "black")};
    @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
      width: 70vw;
      text-align: left;
    }
    @media only screen and ${TABLET_CONDITION} {
    }
  }
`;
const SubHeaderModel = styled(SubHeader)`
  flex-direction: row;
  background: transparent;
  align-items: center;
  justify-content: center;
  color: black;
  padding: 1vw;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    flex-direction: column;
    height: 137vw;
    padding: 6vw;
    h1 {
      font-size: 6.5vw;
    }
  }
  @media only screen and ${TABLET_CONDITION} {
    height: 30vw;
  }
`;
const TITLE = "Create Images Datasets "
const SUB_Title = "Number one website that allows users to colaborate on creating their own image dataset"
export default ({ modelImage, title, subTitle }) =>
    <SubHeader>
      <TextContainer>
        <h1>{title || TITLE}</h1>
        <p>{subTitle || SUB_Title}</p>
      </TextContainer>
    </SubHeader>
