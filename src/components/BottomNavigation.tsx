import React, { useState } from "react";
import CategoryMenus from "../CategoryMenus";
import styled from "styled-components";
import {
  VideoOutlineIcon,
  PersonOutlineIcon,
  MenuIcon,
  ToteBagIcon,
  Colors,
  Body2,
  Button,
} from "@class101/ui";

const Wrapper = styled.div`
  position: fixed;
  height: calc(58px + env(safe-area-inset-bottom));
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 1px, rgb(0 0 0 / 10%) 0px 16px 30px 4px;
  width: 100vw;
  z-index: 1999;
  padding: 0 calc(env(safe-area-inset-right) + 8px) env(safe-area-inset-bottom)
    calc(env(safe-area-inset-left) + 8px);

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 640px;
  justify-content: space-between;
`;

const StyledButtonLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
  cursor: pointer;
  text-decoration: none;
`;

const StyledButton = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
  cursor: pointer;
  text-decoration: none;
`;

const ContentName = styled.div`
  font-size: 9px;
  font-weight: 600;
  color: rgb(26, 26, 26);
  line-height: 12px;
  letter-spacing: normal;
  margin: 0px;
`;

//카테고리 버튼 눌렀을 시 등장하는 전체 카테고리 관련 컴포넌트
const AllCategoryContainer = styled.div<{ isOpened: boolean }>`
  margin-left: 24px;
  margin-right: 24px;

  display: ${(props) => (props.isOpened ? "block" : "none")};
`;

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 32px 0px;
`;

const SectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
`;

const SectionTitle = styled(Body2)`
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  border-bottom: 1px solid rgb(239, 239, 239);
  color: rgb(162, 162, 162);
  height: 26px;
  display: flex;
  margin: 0px 15px 4px 0px;
`;

const ChildrenGroup = styled.section`
  display: flex;
  flex-direction: row;
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Children = styled.p`
  height: 40px;
  max-height: 40px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  box-sizing: border-box;
  margin: 0;
`;

const BottomButton = styled(Button)`
  border: 1px solid rgb(239, 239, 239);
  box-sizing: border-box;
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  padding: 0px 16px;
  vertical-align: middle;
  display: inline-flex;
  width: auto;
  color: rgb(26, 26, 26);
  letter-spacing: -0.2px;
  height: 40px;
  text-decoration-line: none;
  margin-right: 9px;
`;

const BottomNavigation = () => {
  const [isOpened, setOpened] = useState(false);

  return (
    <>
      <div
        className="AllCategory_Wrapper"
        style={{ backgroundColor: "rgb(255, 255, 255)" }}
      >
        <AllCategoryContainer isOpened={isOpened}>
          <SectionWrapper>
            <SectionContainer>
              <CategoryContainer>
                <SectionTitle element="h1">크리에이티브</SectionTitle>
                <ChildrenGroup>
                  <ChildrenWrapper>
                    {CategoryMenus.slice(0, 5).map((item) => (
                      <Children key={item.id}>{item.name}</Children>
                    ))}
                  </ChildrenWrapper>
                  <ChildrenWrapper>
                    {CategoryMenus.slice(5, 9).map((item) => (
                      <Children key={item.id}>{item.name}</Children>
                    ))}
                  </ChildrenWrapper>
                </ChildrenGroup>
              </CategoryContainer>

              <CategoryContainer style={{ marginTop: "32px" }}>
                <SectionTitle element="h1">커리어</SectionTitle>
                <ChildrenGroup>
                  <ChildrenWrapper>
                    {CategoryMenus.slice(9, 12).map((item) => (
                      <Children key={item.id}>{item.name}</Children>
                    ))}
                  </ChildrenWrapper>
                  <ChildrenWrapper>
                    {CategoryMenus.slice(12, 14).map((item) => (
                      <Children key={item.id}>{item.name}</Children>
                    ))}
                  </ChildrenWrapper>
                </ChildrenGroup>
              </CategoryContainer>

              <CategoryContainer style={{ marginTop: "32px", minWidth: "50%" }}>
                <SectionTitle element="h1">수익 창출</SectionTitle>
                <ChildrenGroup>
                  <ChildrenWrapper>
                    {CategoryMenus.slice(14, 17).map((item) => (
                      <Children key={item.id}>{item.name}</Children>
                    ))}
                  </ChildrenWrapper>
                </ChildrenGroup>
              </CategoryContainer>

              <CategoryContainer style={{ marginTop: "32px", minWidth: "50%" }}>
                <SectionTitle element="h1">키즈</SectionTitle>
                <ChildrenGroup>
                  <ChildrenWrapper>
                    {CategoryMenus.slice(17).map((item) => (
                      <Children key={item.id}>{item.name}</Children>
                    ))}
                  </ChildrenWrapper>
                </ChildrenGroup>
              </CategoryContainer>

              <CategoryContainer
                style={{ marginTop: "32px", flexDirection: "row" }}
              >
                <BottomButton>시그니처</BottomButton>
                <BottomButton>키즈</BottomButton>
                <BottomButton>Created by</BottomButton>
              </CategoryContainer>
            </SectionContainer>
          </SectionWrapper>
        </AllCategoryContainer>
      </div>

      <Wrapper>
        <NavigationContainer>
          <StyledButtonLink
            href="https://class101.net/"
            onClick={() => setOpened(false)}
          >
            <span>
              <VideoOutlineIcon size={24} fillColor={Colors.orange700} />
            </span>
            <div className="spacingBox"> </div>
            <ContentName style={{ color: "rgb(255, 61, 0)" }}>
              클래스
            </ContentName>
          </StyledButtonLink>
          <StyledButtonLink
            href="https://class101.net/"
            onClick={() => setOpened(false)}
          >
            <span>
              <ToteBagIcon size={24} />
            </span>
            <div className="spacingBox"> </div>
            <ContentName>스토어</ContentName>
          </StyledButtonLink>
          <StyledButton onClick={() => setOpened(true)}>
            <span>
              <MenuIcon size={24} />
            </span>
            <div className="spacingBox"> </div>
            <ContentName>카테고리</ContentName>
          </StyledButton>
          <StyledButtonLink
            href="https://class101.net/login?redirect=%2Fme%3F"
            onClick={() => setOpened(false)}
          >
            <span>
              <PersonOutlineIcon size={24} />
            </span>
            <div className="spacingBox"> </div>
            <ContentName>마이페이지</ContentName>
          </StyledButtonLink>
        </NavigationContainer>
      </Wrapper>
    </>
  );
};

export default BottomNavigation;
