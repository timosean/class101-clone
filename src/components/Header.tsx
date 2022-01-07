import React, { useState } from "react";
import "./Header.css";
import styled from "styled-components";
import logo from "../images/classlogo.png";
import {
  TextButton,
  Headline3,
  IconButton,
  SearchIcon,
  ButtonSize,
} from "@class101/ui";

const HeaderWrapper = styled.div`
  position: relative;
  background-color: white;
  box-shadow: none;
`;

const HeaderViewController = styled.div`
  background-color: rgb(255, 255, 255);
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const HeaderContents = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0px;

  @media only screen and (min-width: 1240px) {
    max-width: 1176px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1239px) {
    margin-left: 32px;
    margin-right: 32px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 18px 24px 8px;
    margin: 0px;
  }
`;

const StyledTextButton = styled(TextButton)`
  font-size: 100%;
  text-decoration: none;
`;

const LogoWrapper = styled.span`
  display: flex;
  margin-right: 28px;
`;

const ClassOrStore = styled.div<{ isOpened: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 36px;
  flex-direction: row;

  visibility: ${(props) => (props.isOpened ? "hidden" : "visible")};
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
  @media only screen and (min-width: 1024px) {
    width: 420px;
    margin: 0px;
  }
`;

const StyledInput = styled.input<{ isOpened: boolean }>`
  margin: 0px;
  width: ${(props) => (props.isOpened ? "640px" : "100%")};
  height: 100%;
  font-size: 14px;
  padding: 12px 52px 12px 16px;
  background: rgb(248, 248, 249);
  border: 1px solid rgb(248, 248, 249);
  box-sizing: border-box;
  outline-offset: -2px;
  border-radius: 24px;
`;

const StyledIconButton = styled(IconButton)`
  border: none;
  outline: none;
  padding: 0px;
  background-color: transparent;
  position: absolute;
  right: 16px;
  cursor: pointer;
  top: calc(50% - 10px);
  width: 20px;
  height: 20px;
`;

const CancelButton = styled(TextButton)<{ isOpened: boolean }>`
  background-color: transparent;
  margin: 0px 0px 0px 16px;
  display: ${(props) => (props.isOpened ? "inline" : "none")};
  color: rgb(162, 162, 162);
`;

const ContentsForDesktop = styled.div<{ isOpened: boolean }>`
  display: flex;
  align-items: center;
  margin-left: auto;
  position: relative;

  display: ${(props) => (props.isOpened ? "none" : "block")};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

const NavDiv = styled.div`
  margin-right: 24px;
  min-width: 72px;
`;

const NavLink = styled.a`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
`;

const SearchInfoWrapper = styled.div`
  position: absolute;
  top: 72px;
  left: 0px;
  width: 100%;
  z-index: 2000;
  background-color: rgb(255, 255, 255);
`;

const SearchInfoContentWrapper = styled.div`
  width: 100%;

  @media only screen and (min-width: 1024px) {
    max-width: 676px;
    margin: auto;
    padding-bottom: 20px;
  }

  @media only screen and (max-width: 1023px) {
    height: 80vh;
    overflow: scroll;
  }
`;

const SearchInfoContent = styled.div`
  padding: 24px 0px 28px;
  width: 100%;
  border-radius: 0px 0px 3px 3px
  visibility: visible;
  background-color: rgb(255, 255, 255);
`;

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const onInputClick = () => {
    setIsOpened(true);
  };
  const onCancelClick = () => {
    setIsOpened(false);
  };

  return (
    <HeaderWrapper>
      <HeaderViewController>
        <HeaderContents>
          {/*로고 자리*/}
          <LogoWrapper>
            <a href="https://class101.net" className="logo-home">
              <img src={logo} alt="logo" />
            </a>
          </LogoWrapper>

          {/*클래스/스토어 자리*/}
          <ClassOrStore isOpened={isOpened}>
            <StyledTextButton to="https://class101.net">
              <Headline3 element="h4" color="#ff5600">
                클래스
              </Headline3>
            </StyledTextButton>
            <div style={{ width: "16px" }}>{}</div>
            <StyledTextButton to="https://class101.net/store">
              <Headline3 element="h4">스토어</Headline3>
            </StyledTextButton>
          </ClassOrStore>

          {/*검색창 자리*/}
          <SearchInputWrapper>
            <form className="search-input-form">
              <StyledInput
                isOpened={isOpened}
                type="search"
                placeholder="찾으시는 취미가 있으신가요?"
                maxLength={100}
                tabIndex={1}
                onClick={onInputClick}
              />
              <StyledIconButton
                icon={<SearchIcon />}
                size={ButtonSize.XSMALL}
              />
            </form>
            <CancelButton onClick={onCancelClick} isOpened={isOpened}>
              취소
            </CancelButton>
          </SearchInputWrapper>

          {/*데스크탑 컨텐츠(크리에이터 지원/기업교육/로그인)*/}
          <ContentsForDesktop isOpened={isOpened}>
            <NavContainer>
              <NavDiv data-element-name="navigation-creator-apply-button">
                <NavLink href="https://creator.class101.net/center/apply?from=unauth_main_header">
                  크리에이터 지원
                </NavLink>
              </NavDiv>
              <NavDiv
                data-element-name="navigation-business-button"
                style={{ minWidth: "37px" }}
              >
                <NavLink href="https://class101.net/business/landing">
                  기업교육
                </NavLink>
              </NavDiv>
              <NavDiv
                data-element-name="navigation-login-button"
                style={{ marginRight: "0", minWidth: "36px" }}
              >
                <NavLink href="https://class101.net/login?redirect=%2F%3F">
                  로그인
                </NavLink>
              </NavDiv>
            </NavContainer>
          </ContentsForDesktop>

          {/*검색창 클릭 시 나타나는 영역(추천검색어 / 인기검색어)*/}
          {isOpened && (
            <SearchInfoWrapper>
              <SearchInfoContentWrapper>
                <SearchInfoContent>
                  <div className="recommended-words">추천 검색어</div>
                </SearchInfoContent>
              </SearchInfoContentWrapper>
            </SearchInfoWrapper>
          )}
        </HeaderContents>
      </HeaderViewController>
    </HeaderWrapper>
  );
};

export default Header;
