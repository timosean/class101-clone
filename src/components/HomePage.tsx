import React from "react";
import styled from "styled-components";
import { Subtitle1, AnchorButton } from "@class101/ui";

const OuterDiv = styled.div`
  padding: 0;
  margin: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
`;

const SectionBox = styled.div`
  margin-left: 24px;
  margin-right: 24px;

  @media only screen and (min-width: 1240px) {
    max-width: 1176px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const SpacingBox = styled.div`
  @media only screen and (min-width: 1024px) {
    margin-top: 72px;
  }
`;

const SectionTitle = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const AnchorButtonWrapper = styled.span`
  margin-left: 24px;
  font-weight: bold;
  color: rgb(162, 162, 162);
  display: inline-flex;
  vertical-align: middle;
  background: none;
  line-height: 20px;
  letter-spacing: -0.2px;

  &:hover {
    color: rgb(202, 202, 202);
    text-decoration: underline;
    background: none;
  }

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

const StyledAnchorButton = styled(AnchorButton)`
  background: none;

  &:hover {
    background: none;
  }
`;

const HomePage = () => {
  return (
    <div
      className="BackgroundContainer"
      style={{ backgroundColor: "rgb(255, 255, 255)" }}
    >
      <OuterDiv>
        <div
          className="infinite-scroll-component"
          style={{
            height: "auto",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <SectionBox>
            <div data-element-name="time-deal-section">
              <SpacingBox />
              <SectionTitle>
                <a
                  href="https://class101.net/time-deal?type=klass"
                  style={{
                    display: "inline-flex",
                    flexDirection: "column",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="TitleTop"
                    style={{
                      width: "100%",
                      justifyContent: "space-between",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Subtitle1 element="h2">오늘의 특가! TIME DEAL</Subtitle1>
                  </div>
                </a>
                <AnchorButtonWrapper>
                  <StyledAnchorButton to="https://class101.net/time-deal?type=klass">
                    전체 클래스 보기
                  </StyledAnchorButton>
                </AnchorButtonWrapper>
              </SectionTitle>
              <section className="SectionWithoutSideNavigationCarousel"></section>
            </div>
          </SectionBox>
        </div>
      </OuterDiv>
    </div>
  );
};

export default HomePage;
