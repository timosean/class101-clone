import React, { useState } from "react";
import "./Header.css";
import styled from "styled-components";
import logo from "../images/classlogo.png";
import {
  TextButton,
  Headline3,
  IconButton,
  SearchIcon,
  Button,
  Divider,
  ClockIcon,
  Colors,
} from "@class101/ui";

const HeaderWrapper = styled.div`
  position: relative;
  background-color: white;
  box-shadow: none;
  width: 100vw;
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
    padding: 8px 24px 8px 20px;
    margin: 0px;
  }
`;

const StyledTextButton = styled(TextButton)`
  font-size: 100%;
  text-decoration: none;
`;

const LogoWrapper = styled.span<{ isOpened: boolean }>`
  display: flex;
  margin-right: 28px;
  position: ${(props) => (props.isOpened ? "absolute" : "")};

  @media only screen and (max-width: 1023px) {
    display: ${(props) => (props.isOpened ? "none" : "inline")};
  }
`;

const ClassOrStore = styled.div<{ isOpened: boolean }>`
  display: ${(props) => (props.isOpened ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  margin-right: 36px;
  flex-direction: row;

  @media only screen and (min-width: 768px) {
    display: ${(props) => (props.isOpened ? "none" : "flex")};
  }

  @media only screen and (min-width: 414px) and (max-width: 1023px) {
    display: none;
  }
`;

const SearchInputWrapper = styled.div<{ isOpened: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;

  @media only screen and (min-width: 1024px) {
    width: 420px;
    margin: ${(props) => (props.isOpened ? "auto" : "0")};
  }

  @media only screen and (max-width: 1023px) {
    flex: 1 1 0%;
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

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 1023px) {
    width: 100%;
  }
`;

const StyledIconButton = styled(IconButton)<{ isOpened: boolean }>`
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

  @media only screen and (max-width: 1023px) {
    display: ${(props) => (props.isOpened ? "none" : "block")};
  }
`;

const CancelButton = styled(TextButton)`
  margin: 0px 0px 0px 16px;
  color: rgb(162, 162, 162);
`;

const ContentsForDesktop = styled.div<{ isOpened: boolean }>`
  display: flex;
  align-items: center;
  margin-left: auto;
  position: relative;

  display: ${(props) => (props.isOpened ? "none" : "block")};

  @media only screen and (max-width: 1023px) {
    display: none;
  }
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

  @media only screen and (max-width: 1023px) {
    height: 80vh;
    overflow: scroll;
    top: 56px;
  }
`;

const SearchInfoContentWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;

  @media only screen and (min-width: 1024px) {
    max-width: 676px;
    margin: auto;
    padding-bottom: 20px;
  }

  @media only screen and (max-width: 1023px) {
    width: 100vw;
    left: 0px;
    padding: 24px 24px 28px;
  }
`;

const SearchInfoContent = styled.div`
  padding: 24px 0px 28px;
  width: 100%;
  border-radius: 0px 0px 3px 3px
  visibility: visible;
  background-color: rgb(255, 255, 255);
`;

const RecKeywordsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 8px;
`;

const KeywordButton = styled(Button)`
  background-color: rgb(248, 248, 248);
  border: 0px;
  border-radius: 25px;
  margin: 8px 4px 0px 0px;
  padding: 8px 16px;
  cursor: pointer;
`;

const StyledDivider = styled(Divider)`
  margin: 16px 0px 24px;
`;

const RecommendedTime = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6px;

  @media only screen and (max-width: 1023px) {
    margin-left: auto;
  }
`;

const PopularKeywordContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;

const PopularKeywordList = styled.div`
  flex: 1 0 50%;

  @media only screen and (min-width: 1024px) {
    max-width: 50%;
  }
`;

const PopularKeywordItem = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: rgb(26, 26, 26);
  padding: 8px 0px;
  border-radius: 0px 0px 3px 3px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const RankingNumber = styled.span`
  width: 18px;
  margin-right: 8px;
  font-weight: bold;
  letter-spacing: -1px;
  color: rgb(255, 86, 0);
`;

const OverlayBackground = styled.div`
  position: absolute;
  left: 0px;
  top: 72px;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.37);
  z-index: 1900;

  @media only screen and (max-width: 1023px) {
    top: 56px;
    height: calc(100vh - 56px);
  }
`;

//헤더컴포넌트
const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const onInputClick = () => {
    setIsOpened(true);
  };
  const onCancelClick = () => {
    setIsOpened(false);
  };

  const RecommendedKeywords: string[] = [
    "오늘의 특가",
    "새해 인기취미",
    "태블릿최저가",
    "새해 인기 클래스",
    "재테크 시작",
    "N잡러 준비",
    "일잘러의 비법",
    "요즘 외국어 공부",
  ];

  const PopularKeywords = [
    {
      id: 1,
      word: "아이패드",
    },
    {
      id: 2,
      word: "일러스트",
    },
    {
      id: 3,
      word: "이모티콘",
    },
    {
      id: 4,
      word: "뜨개질",
    },
    {
      id: 5,
      word: "그림",
    },
    {
      id: 6,
      word: "비즈니스 사주",
    },
    {
      id: 7,
      word: "부동산",
    },
    {
      id: 8,
      word: "케이크",
    },
    {
      id: 9,
      word: "웹툰",
    },
    {
      id: 10,
      word: "아이패드 프로",
    },
  ];

  return (
    <HeaderWrapper>
      <HeaderViewController>
        <HeaderContents>
          {/*로고 자리*/}
          <LogoWrapper isOpened={isOpened}>
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
          <SearchInputWrapper isOpened={isOpened}>
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
                icon={<SearchIcon size={20} />}
                isOpened={isOpened}
              />
            </form>
            {isOpened && (
              <CancelButton onClick={onCancelClick}>취소</CancelButton>
            )}
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
                  <div className="keyword-section">
                    <span>추천 검색어</span>
                  </div>
                  <RecKeywordsContainer>
                    {RecommendedKeywords.map((item) => (
                      <KeywordButton>{item}</KeywordButton>
                    ))}
                  </RecKeywordsContainer>

                  <StyledDivider color="#f8f8f8" />

                  <div className="keyword-section">
                    <span>인기 검색어</span>
                    <RecommendedTime>
                      <ClockIcon size={14} fillColor={Colors.gray600} />
                      <div className="standard-time">14:30 기준</div>
                    </RecommendedTime>
                  </div>
                  <PopularKeywordContainer>
                    <PopularKeywordList>
                      {PopularKeywords.slice(0, 5).map((item) => (
                        <>
                          <PopularKeywordItem key={item.id}>
                            <RankingNumber key={item.id}>
                              {item.id}
                            </RankingNumber>
                            {item.word}
                          </PopularKeywordItem>
                        </>
                      ))}
                    </PopularKeywordList>
                    <PopularKeywordList>
                      {PopularKeywords.slice(5, 10).map((item) => (
                        <>
                          <PopularKeywordItem key={item.id}>
                            <RankingNumber key={item.id}>
                              {item.id}
                            </RankingNumber>
                            {item.word}
                          </PopularKeywordItem>
                        </>
                      ))}
                    </PopularKeywordList>
                  </PopularKeywordContainer>
                </SearchInfoContent>
              </SearchInfoContentWrapper>
            </SearchInfoWrapper>
          )}
        </HeaderContents>

        {isOpened && <OverlayBackground />}
      </HeaderViewController>
    </HeaderWrapper>
  );
};

export default Header;
