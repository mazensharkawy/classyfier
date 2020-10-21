import styled from "styled-components";
import {
  LARGE_SCREEN_BREAK_POINT,
  MOBILE_BREAK_POINT,
  PRIMARY_COLOR,
  TABLET_CONDITION
} from "../../config";
import DownArrowIcon from "../assets/img/arrow-down.png";

export const ProfileLink = styled.a`
  color: ${PRIMARY_COLOR};
  text-decoration: underline;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3vw;
  margin-bottom: 0.8vw;
  border: ${({ isValid }) => (isValid ? "1px solid #ececec" : "1px solid red")};
  background: ${({ isValid }) => (isValid ? "white" : "#ffcccb")};
  border-radius: 5px;
  &:focus-within {
    outline-color: #4d90fe;
    outline-style: auto;
    outline-width: 5px;
  }
  input {
    &:focus {
      outline: none;
    }
  }
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    height: 9vw;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    border: ${({ isValid }) =>
      isValid ? "1.5px solid #ececec" : "1.5px solid red"};
    border-radius: 7px;
    height: 60px;
  }
`;
export const Input = styled.input`
  border-radius: 5px;
  height: 3vw;
  width: 100%;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  padding: 0.5vw 1.6vw;
  font-size: 1vw;
  color: #717171;
  border: none;
  border: ${({ isValid, inContainer }) =>
    inContainer ? "none" : isValid ? "1px solid #ececec" : "1px solid red"};
  background: ${({ isValid, inContainer }) =>
    inContainer ? "transparent" : isValid ? "white" : "#ffcccb"};
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    height: 9vw;
    font-size: unset;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    padding: 9px 30px;
    border-radius: 7px;
    font-size: 20px;
    border: ${({ isValid }) =>
      isValid ? "1.5px solid #ececec" : "1.5px solid red"};
    height: 60px;
  }
`;
export const MessageContainer = styled.div`
  display: block;
  p {
    color: grey;
  }
`;
export const MessageBox = styled.textarea`
  height: 10vw;
  width: 100%;
  justify-content: space-between;

  margin-bottom: 0.8vw;
  border: 1px solid #ececec;
  background: white;
  border-radius: 5px;
  &:focus-within {
    outline-color: #4d90fe;
    outline-style: auto;
    outline-width: 5px;
  }
  input {
    &:focus {
      outline: none;
    }
  }
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    height: 36vw;
    font-size: unset;
  }
`;
export const StyledDropDown = styled.select`
    border-radius: 0.6vw;
    height: 3vw;
    width:100%;
    cursor: pointer;
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    background: white;
    padding: 0.5vw 1.6vw;
    margin-bottom: 0.8vw;
    font-size: 1vw;
    color: #717171;
    background-image: url("${DownArrowIcon}");
    background-repeat: no-repeat;
    background-size: 15px auto;
    background-position-x: 95%;
    background-position-y: 50%;
    @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
      border-radius: 1.5vw;
    }
    @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
      border-radius:12px;
      padding: 9px 30px;
      font-size:20px;
      height: 60px;
      margin-bottom: 15px;
    }
`;
export const StyledInput = styled.input`
  border-radius: 5px;
  height: 3vw;
  width: 100%;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  background: white;
  padding: 0.4vw 2.3vw;
  margin-bottom: 0.8vw;
  font-size: 1vw;
  border: 1px solid #ececec;
  cursor: pointer;
  font-size: 0.925em;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    height: 6.25vw;
    padding: 4.5vw 7vw;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    padding: 7.5px 30px;
    font-size: 20px;
    height: 60px;
    border: 1.5px solid #ececec;
  }
`;
export const Container = styled.div`
  width: 35%;
  h2 {
    margin: 0.4em 0.4em 0.4em 0;
  }
  p {
    margin: 0 0.4em 0.4em 0;
  }
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    width: 100%;
    padding: 3vw;
  }
  @media only screen and ${TABLET_CONDITION} {
    padding: 0 2vw;
    margin: 0;
    width: 100%;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    width: 605px;
  }
`;
export const TagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.2vw 0;
  div {
    min-width: 30%;
    max-width: 35%;
    background: #eae7f6;
    border-radius: 10px;
    text-align: center;
    padding: 0.4vw 0.8vw;
    p {
      color: ${PRIMARY_COLOR};
      margin: 0;
      font-weight: bold;
    }
    @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
      border-radius: 3vw;
      padding: 7.5px 3.125vw;
    }
    @media only screen and ${TABLET_CONDITION} {
      border-radius: 0.7vw;
    }
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    margin: 23px 0;
  }
`;
export const AdditionalDetails = styled.div`
  margin-top: 1vw;
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    margin-top: 19.2px;
  }
`;
export const Title = styled.div`
  display: block;
  p {
    font-weight: bold;
    color: gray;
  }
`;
export const Data = styled.div`
  display: block;
  justify-content: flex-end;
  p {
    text-align: right;
    color: ${PRIMARY_COLOR};
  }
`;
export const Price = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      margin: 0.7em 0;
    }
  }
  h4 {
    text-align: right;
    font-weight: bolder;
    color: ${PRIMARY_COLOR};
    font-size: 2vw;
    margin: 0;
    @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
      font-size: 6vw;
    }
    @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
      font-size: 38.4px;
    }
  }
  p {
    color: gray;
  }
`;
export const SubScript = styled.span`
  font-weight: bold;
  color: #949494;
  font-size: 1vw;
  margin-left: ${({ halfMargin }) => (halfMargin ? "0.5vw" : "1vw")};
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    font-size: 3vw;
    margin-left: ${({ halfMargin }) => (halfMargin ? "1vw" : "2vw")};
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    font-size: 0.6em;
    margin-left: ${({ halfMargin }) => (halfMargin ? "10px" : "19px")};
  }
`;
export const DealFeaturesIcons = styled.div`
  display: flex;
  justify-content: space-between;
  color: #7e70db;
  font-size: 1em;
  font-weight: bold;
  height: 2.3vw;
  line-height: 2.7vw;
  align-items: center;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    padding: 5vw 0;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    font-size: 14.5px;
    height: 45px;
    line-height: 53px;
  }
  div {
    display: flex;
    height: 2.34vw;
    align-items: center;
    @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
      height: 6.5vw;
    }
    @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
      height: 45px;
    }
    img {
      height: 70%;
    }
    p {
      margin: 0.8% 0 0 0.5vw;
      height: fit-content;
      @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
        margin-top: 9px;
      }
    }
  }
`;
export const RecommendedDealer = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  border: 1px solid #ededed;
  padding: 1.2vw;
  border-radius: 10px;
  align-items: center;
  div {
    display: flex;
    justify-content: space-between;
    width: 6.25vw;
    height: 1.17vw;
    @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
      width: 25.25vw;
      height: 4.17vw;
      paddingL 2.5vw;
    }
    @media only screen and ${TABLET_CONDITION} {
      height: 1.6vw;
      width: 10.25vw;
    }
    @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
      width: 156.4px;
      height: 38.4px;
      padding: 11.8px;
    }
    span {
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      img {
        height: 100%;
        vertical-align: middle;
        cursor: pointer;
      }
    }
  }
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    padding: 5.5vw;
    border-radius: 13px;
    border: 1.5px solid #ededed;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    padding: 23px;
    border-radius: 13px;
    border: 1.5px solid #ededed;
  }
  @media only screen and ${TABLET_CONDITION} {
    border-radius: 0.7vw;
  }
`;
export const RecommendedDealerLogo = styled.img`
  height: 2vw;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    height: 6vw;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    height: 37.5px;
  }
  @media only screen and ${TABLET_CONDITION} {
    height: 1.35vw;
  }
`;
export const Expand = styled.img`
  opacity: 0.5;
  vertical-align: center;
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    width: 14px;
  }
`;
export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MiniStyledDropDown = styled(StyledDropDown)`
  width: 12vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    width: 233px;
  }
`;
export const FailMessage = styled.p`
  color: red;
`;
export const GetQuoteButton = styled.a`
  color: white;
  cursor: pointer;
  display: block;
  background: ${PRIMARY_COLOR};
  text-align: center;
  border-radius: 1.5vw;
  padding: 0.8vw 0;
  margin: 1vw 0;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    border-radius: 5vw;
    padding: 2.5vw 0;
  }
  @media only screen and ${TABLET_CONDITION} {
    border-radius: 2vw;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    border-radius: 25px;
    padding: 15px 0;
    margin: 20px 0;
  }
`;
export const SubmitButton = styled.a`
  color: white;
  cursor: pointer;
  display: block;
  background: ${PRIMARY_COLOR};
  text-align: center;
  padding: 0.8vw 0;
  margin: 1.9vw 0;
  border-radius: 2vw;
  font-weight: 500;
  width: 30%;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    padding: 3vw 2vw;
    border-radius: 7vw;
    width: 45%;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    border-radius: 38.4px;
    margin: 38px 0;
    padding: 23px 0 23px 0;
  }
`;
export const CancelButton = styled(SubmitButton)`
  width: 30%;
  background: white;
  color: ${PRIMARY_COLOR};
  border-color: ${PRIMARY_COLOR};
  border: 1px solid;
`;
export const HideFormBar = styled.div`
  display: flex;
  justify-content: flex-end;
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    font-size: 28.8px;
  }
`;
export const CloseButton = styled.div`
  font-size: 2vw;
  color: ${PRIMARY_COLOR};
  cursor: pointer;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
      font-size: 7vw;
  }
  @media only screen and ${TABLET_CONDITION} {
      font-size: 3.5vw;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
      font-size: 38.4;
`;
export const UserFormContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  padding: 1vw;
  margin: ${({ isCentered }) => (isCentered ? "8% auto" : "1vh 0")};
  h2 {
    margin: 0.4em 0.4em 0.4em 0;
  }
  h4 {
    margin: 0.6em 0;
  }
  p {
    margin: 0 0.4em 0.4em 0;
  }
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    width: 80vw;
    margin: ${({ isCentered }) => (isCentered ? "15vw auto" : "0 auto")};
  }
  @media only screen and ${TABLET_CONDITION} {
    margin: ${({ isCentered }) => (isCentered ? "8% auto" : "0.5vh 0")};
  }
`;
export const StandardButton = styled.a`
  color: white;
  cursor: pointer;
  display: block;
  background: ${PRIMARY_COLOR};
  text-align: center;
  border-radius: 1.6vw;
  padding: 0.8vw 0 0.8vw 0;
  margin: 0;
  width: 40%;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    padding: 2vw 0 2vw 0;
    border-radius: 4vw;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    border-radius: 30px;
    padding: 15px 0 15px 0;
  }
`;
export const SkipButton = styled.a`
  color: grey;
  text-decoration: underline;
  cursor: pointer;
  display: block;
  text-align: center;
  padding: 0.8vw 0 0.8vw 0;
  margin: 0;
  width: 10%;
`;
export const ErrorMessage = styled.p`
  color: red;
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div:nth-child(1) {
    margin: 0 0.8vw 0 0;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    div:nth-child(1) {
      margin: 0 1vw 0 0;
    }
  }
`;
