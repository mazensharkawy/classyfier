import Link from "next/link";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { logout } from "../../../actions/index";
import {
  DIV_FLEX,
  HIGHLIGHT_COLOR,
  LARGE_SCREEN_BREAK_POINT,
  LARGE_SCREEN_WIDTH,
  MOBILE_BREAK_POINT,
  NORMAL_SCREEN_WIDTH,
  PRIMARY_COLOR,
  TABLET_CONDITION
} from "../../../config";
// import quoteHistory from "../../assets/img/Icon_Quote-History.png";
// import signin from "../../assets/img/Icon_Sign In.png";
// import signout from "../../assets/img/Icon_Sign Out.png";
// import signup from "../../assets/img/Icon_Sign Up.png";
// import logo from "../../assets/img/logo2.svg";
// import logoWhite from "../../assets/img/logo3.svg";
// import menuIcon from "../../assets/img/menu.svg";
// import whiteMenuIcon from "../../assets/img/whitemenu.png";
// import AllMakes from "../AllMakes";
// import PopularModels from "../PopularModels";

const Head = styled.header`
  width: ${({ isHomepage }) => (isHomepage ? "100%" : "100vw")};
  border-bottom: ${({ isHomepage }) =>
    isHomepage ? "none" : `2px solid ${PRIMARY_COLOR}`};
  position: ${({ isHomepage }) => (isHomepage ? "none" : "sticky")};
  background: ${({ isHomepage }) => (isHomepage ? "unset" : "white")};
  display: flex;
  justify-content: center;
  top: 0;
  z-index: 20;
`;
// padding: 1.5vw 0;
// padding: 6vw 3.5vw;
// padding: 58px 0;
const InsideContainer = styled.nav`
  width: ${({ isHomepage }) => (isHomepage ? "100%" : NORMAL_SCREEN_WIDTH)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    width: 95vw;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    width: ${LARGE_SCREEN_WIDTH};
  }
`;
export const Logo = styled.img`
  height: 2.35vw;
  cursor: pointer;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    height: 10vw;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    height: 50px;
  }
  @media only screen and ${TABLET_CONDITION} {
    height: 5vw;
  }
`;
const DropDownMenu = styled.div`
  position: relative;
  display: inline-block;
  padding: 1.5vw 0;
  width: 5vw;
  margin-right: -1.5vw;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    width: unset;
    margin-right: 0;
    padding: 7vw 3.5vw;
  }
  @media only screen and ${TABLET_CONDITION} {
    padding: 3.6vw 0;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    padding: 58px 0;
  }
  &:hover {
    div {
      display: block;
    }
  }
`;

const MenuBodyContainer = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 99;
  right: 0;
  border-radius: 0.8vw;
  margin-top: min(2vw, 10px);
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    right: 0;
    border-radius: 2.5vw;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    border-radius: 15px;
  }
  @media only screen and ${TABLET_CONDITION} {
    border-radius: 1vw;
  }
`;
const BrandMenu = styled.div`
  position: relative;
  display: inline-block;
  width: fit-content;
  padding: 1.5vw 2vw;
  margin-right: -1.5vw;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    margin-right: 0;
    padding: 7vw 4vw;
  }
  @media only screen and ${TABLET_CONDITION} {
    padding: 3.6vw 3vw;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    padding: 58px 38px;
  }
  &:hover {
    div {
      flex-wrap: nowrap;
    }
    div:nth-child(2) {
      right: unset;
    }
    ${MenuBodyContainer} {
      display: block;
      color: black;
      position: fixed;
      width: ${({ isWide }) => (isWide ? "85vw" : "80vw")};
      border-radius: 1.8vw;
      left: 10vw;
      margin-top: min(3vw, 15px);
      fieldset {
        border: none;
      }
      legend {
        @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
          margin: 0 auto;
        }
      }
      @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
        height: 50vh;
        overflow: scroll;
        border-radius: 3.6vw;
        left: 0;
        width: 100vw;
      }
      @media only screen and ${TABLET_CONDITION} {
        border-radius: 2.7vw;
        width: 90vw;
        left: 5vw;
      }
      @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
        padding: 0 57px 19px 57px;
        width: ${({ isWide }) => (isWide ? "1900px" : "1700px")};
      }
    }
  }
`;
const MenuOption = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.8vw;
  width: 25vw;
  img {
    height: 3.2vw;
  }
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    padding: 5vw 0;
    border-radius: 2.5vw;
    width: 87vw;
    img {
      height: 10vw;
    }
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    border-radius: 15px;
    width: 480px;
    img {
      height: 61.44px;
    }
  }
  @media only screen and ${TABLET_CONDITION} {
    width: 39vw;
    img {
      height: 4.5vw;
    }
  }
  &:hover {
    background-color: #ddd;
  }
`;
const MenuOptionSubsection = styled.div`
  display: block;
  width: 17vw;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    width: 50vw;
    h4 {
      margin: 1em 0;
    }
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    width: 326.4px;
  }
  @media only screen and ${TABLET_CONDITION} {
    width: 24vw;
  }
`;
const MenuImgDesktop = styled.img`
  padding: 0;
  height: 1.7vw;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    display: none;
  }
  @media only screen and ${TABLET_CONDITION} {
    display: none;
  }
  @media only screen and (min-width: ${LARGE_SCREEN_BREAK_POINT}) {
    height: 40px;
  }
`;
const MenuImgMobile = styled(MenuImgDesktop)`
  display: none;
  @media only screen and (max-width: ${MOBILE_BREAK_POINT}) {
    display: block;
    height: 6vw;
  }
  @media only screen and ${TABLET_CONDITION} {
    display: block;
    height: 3vw;
  }
`;
// padding: 0 1vw;
const HeaderItemText = styled.p`
  margin: 0 auto;
  width: fit-content;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

class Header extends PureComponent {
  state = {
    isMobileHomePage: false
  };
  render() {
    const { isHomepage = false, loggedIn, logout } = this.props;
    return (
      <Head isHomepage={isHomepage}>
        <InsideContainer isHomepage={isHomepage}>
          <DIV_FLEX>
            <Link href="/">
              {/* <Logo src={isHomepage ? logoWhite : logo} /> */}
              <p style={{color:HIGHLIGHT_COLOR}}>Classyfier</p>
            </Link>
            {/* <BrandMenu>
              <HeaderItemText isHomepage={isHomepage}>Makes</HeaderItemText>
              <MenuBodyContainer>
                <AllMakes />
              </MenuBodyContainer>
            </BrandMenu>
            <BrandMenu isWide={true}>
              <HeaderItemText isHomepage={isHomepage}>
                Popular Models
              </HeaderItemText>
              <MenuBodyContainer>
                <PopularModels />
              </MenuBodyContainer>
            </BrandMenu> */}
          </DIV_FLEX>
          <DropDownMenu>
            {/* <MenuImgDesktop src={menuIcon} />
            <MenuImgMobile src={isHomepage ? whiteMenuIcon : menuIcon} /> */}
            <a style={{color:HIGHLIGHT_COLOR}}>Menu</a>
            <MenuBodyContainer>
              {loggedIn ? (
                <React.Fragment>
                  <Link href="/quotes">
                    <MenuOption>
                      {/* <img src={quoteHistory} /> */}
                      <MenuOptionSubsection>
                        <h4>Quotes History</h4>
                        <p>See your previous lease quotes</p>
                      </MenuOptionSubsection>
                    </MenuOption>
                  </Link>
                  <MenuOption onClick={logout}>
                    {/* <img src={signout}></img> */}
                    <MenuOptionSubsection>
                      <h4>Sign Out</h4>
                    </MenuOptionSubsection>
                  </MenuOption>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <MenuOption href="/signin">
                    {/* <img src={signin} /> */}
                    <MenuOptionSubsection>
                      <h4>Sign in</h4>
                      <p>Got an accoun? Sign in</p>
                    </MenuOptionSubsection>
                  </MenuOption>

                  <MenuOption href="/signup">
                    {/* <img src={signup} /> */}
                    <MenuOptionSubsection>
                      <h4>Sign up</h4>
                      <p>Create a new account now!</p>
                    </MenuOptionSubsection>
                  </MenuOption>
                </React.Fragment>
              )}
            </MenuBodyContainer>
          </DropDownMenu>
        </InsideContainer>
      </Head>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  // loggedIn: auth.loggedIn
});
const mapDispatchToProps = {
  logout
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
