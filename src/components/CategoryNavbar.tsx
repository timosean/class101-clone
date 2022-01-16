import React, { useState } from "react";
import CategoryMenus from "../CategoryMenus";
import styled from "styled-components";
import {
  Button,
  AnchorButton,
  DropDownIcon,
  Body2,
  ChevronRightIcon,
} from "@class101/ui";
import "./CategoryNavbar.css";

const NavigationBar = styled.div`
  position: relative;
  width: 100%;
  max-width: 1176px;
  margin: 0px auto;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  box-shadow: rgb(239 239 239) 0px -1px 0px inset;
  overflow: auto;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
  }

  @media only screen and (max-width: 1239px) {
    margin: 0px;
    padding: 0px 32px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 0px 24px;
    overflow: hidden;
  }
`;

const NavigationTab = styled(Button)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  margin: 0px 28px 0px 0px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: bold;
  padding: 8px 0px 20px;
  white-space: nowrap;
  cursor: pointer;
  color: rgb(26, 26, 26);

  &:hover {
    background-color: transparent;

    ::after {
      content: "";
      background-color: rgb(26, 26, 26);
      position: absolute;
      bottom: 10px;
      left: 0px;
      width: 100%;
      height: 2px;
      z-index: 999;
    }
  }

  &.AllCategory {
    @media only screen and (max-width: 1023px) {
      display: none;
    }
  }
`;

const AnchorNavigationTab = styled(AnchorButton)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  margin: 0px 28px 0px 0px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: bold;
  padding: 8px 0px 20px;
  white-space: nowrap;
  cursor: pointer;
  color: rgb(26, 26, 26);

  &:hover {
    background-color: transparent;

    ::after {
      content: "";
      background-color: rgb(26, 26, 26);
      position: absolute;
      bottom: 10px;
      left: 0px;
      width: 100%;
      height: 2px;
      z-index: 999;
    }
  }

  @media only screen and (max-width: 1023px) {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.15px;
    margin: 0px 16px 0px 0px;
    padding: 12px 0px;

    &:hover {
      font-weight: bold;
    }
  }
`;

const SubmenuTab = styled(AnchorNavigationTab)`
  font-weight: 400;

  &:hover {
    font-weight: bold;
  }

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

const RedBadge = styled.div`
  margin-left: 6px;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: rgb(243, 33, 59);
  align-self: flex-start;
`;

const EmptySpace = styled.div`
  min-height: 30px;
  width: 1px;
  background-color: rgb(248, 248, 248);
  margin-bottom: 12px;
  margin-right: 30px;
`;

//시그니처, 키즈, 원포인트 클래스의 Wrapper
const SubmenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const CategoryDropdownWrapper = styled.div<{ isMenuOpened: boolean }>`
  position: absolute;
  background-color: rgb(255, 255, 255);
  display: ${(props) => (props.isMenuOpened ? "flex" : "none")};
  top: 42px;
  border-right: 1px solid rgb(239, 239, 239);
  border-bottom: 1px solid rgb(239, 239, 239);
  border-left: 1px solid rgb(239, 239, 239);
  border-image: initial;
  border-top: none;
  z-index: 51;
`;

const AdditionalDropdownWrapper = styled.div<{ isSubmenuHover: boolean }>`
  position: absolute;
  background-color: rgb(255, 255, 255);
  display: ${(props) => (props.isSubmenuHover ? "flex" : "none")};
  top: 0px;
  border-right: 1px solid rgb(239, 239, 239);
  border-bottom: 1px solid rgb(239, 239, 239);
  border-image: initial;
  border-top: none;
  z-index: 51;
  height: 773px;
`;

const CategoryDropdownGroup = styled.section`
  display: flex;
  flex-direction: row;
  border-radius: 2px;
`;

const CategoryDropdown = styled.section`
  width: 220px;
  overflow: auto;
  margin-top: 20px;
  padding: 0px 12px;
  box-sizing: border-box;
`;

const DropdownSection = styled.section`
  margin: 0px;
  padding-bottom: 20px;
`;

//대신 element=h2 넣어주어야 함.
const SectionTitle = styled(Body2)`
  padding-left: 20px;
  font-weight: bold;
  font-size: 11px;
  color: rgb(162, 162, 162);
  display: flex;
  align-items: center;
  margin: 0px 0px 4px;
  line-height: unset;
  box-sizing: border-box;
  height: 11px;
`;

const SectionLink = styled.a`
  text-decoration: none;
  color: rgb(26, 26, 26);
`;

const SectionItem = styled.div`
  padding: 8px 8px 8px 20px;
  font-size: 14px;
  line-height: 18px;
  margin: 0px;
  color: rgb(26, 26, 26);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: normal;
  cursor: pointer;
  background-color: transparent;
  height: 34px;
  box-sizing: border-box;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const AdditionalSectionItem = styled(AnchorButton)`
  padding: 8px 8px 8px 20px;
  font-size: 14px;
  line-height: 18px;
  margin: 0px;
  color: rgb(26, 26, 26);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: normal;
  cursor: pointer;
  background-color: transparent;
  height: 34px;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const RightIcon = styled.span`
  visibility: hidden;
`;

//카테고리 바 컴포넌트
const CategoryNavbar = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [isSubmenuHover, setSubmenuHover] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const navbar = document.getElementById("navbar");
  const navLeft = navbar?.offsetLeft;

  const makeIconAppear = (name: string) => {
    document.getElementById(name).style.visibility = "visible";
    document.getElementById(`link-${name}`).style.fontWeight = "bold";
  };
  const makeIconDisappear = (name: string) => {
    document.getElementById(name).style.visibility = "hidden";
    document.getElementById(`link-${name}`).style.fontWeight = "normal";
  };

  const NavtabGroup = [
    { id: 1, name: "이벤트", to: "https://class101.net/events" },
    {
      id: 2,
      name: "바로 수강",
      to: "https://class101.net/search?query=&state=sales&types=klass",
    },
    {
      id: 3,
      name: "신규 클래스",
      to: "https://class101.net/search?query=&sort=likedOrder&state=funding&types=klass",
    },
    {
      id: 4,
      name: "오픈 예정",
      to: "https://class101.net/products/preview/list",
    },
  ];

  const SubmenuGroup = [
    { id: 1, name: "시그니처", to: "https://class101.net/signature" },
    { id: 2, name: "키즈", to: "https://class101.net/kids/selling" },
    {
      id: 3,
      name: "원포인트 클래스",
      to: "https://class101.net/search?types=onePointLesson&query=",
    },
  ];

  return (
    <div className="CategoryNavigationBar__Container">
      <NavigationBar
        className="CategoryNavigationBar__NavigationBar"
        id="navbar"
      >
        <NavigationTab className="AllCategory">
          <span
            onMouseEnter={() => setMenuOpened(true)}
            style={{ display: "flex", alignItems: "center" }}
          >
            전체 카테고리
            <DropDownIcon size={24} />
          </span>
        </NavigationTab>

        <AnchorNavigationTab to="https://class101.net/events/6182c7f6eea106001462755e">
          1월 가입혜택
          <RedBadge />
        </AnchorNavigationTab>

        {NavtabGroup.map((item) => (
          <AnchorNavigationTab key={item.id} to={item.to}>
            {item.name}
          </AnchorNavigationTab>
        ))}

        <EmptySpace />

        <SubmenuWrapper>
          {SubmenuGroup.map((item) => (
            <SubmenuTab key={item.id} to={item.to}>
              {item.name}
            </SubmenuTab>
          ))}
        </SubmenuWrapper>
      </NavigationBar>

      {/*전체 카테고리에 hover했을 때 나타나는 드롭다운 메뉴리스트*/}
      <CategoryDropdownWrapper
        className="category-dropdown"
        isMenuOpened={isMenuOpened}
        onMouseEnter={() => setMenuOpened(true)}
        onMouseLeave={() => setMenuOpened(false)}
        style={{ marginLeft: `${navLeft - 20}px` }}
      >
        <CategoryDropdownGroup>
          <CategoryDropdown>
            <DropdownSection>
              <SectionTitle element="h2">크리에이티브</SectionTitle>
              {CategoryMenus.slice(0, 9).map((menu) => (
                <div
                  onMouseEnter={() => {
                    setCategoryName(`${menu.name}`);
                    setSubmenuHover(true);
                  }}
                  key={menu.id}
                >
                  <SectionItem className="sectionItem">
                    <SectionLink href={menu.to} id={`link-${menu.name}`}>
                      {menu.name}
                    </SectionLink>
                    <RightIcon id={menu.name}>
                      <ChevronRightIcon size={12} />
                    </RightIcon>
                  </SectionItem>
                </div>
              ))}
            </DropdownSection>

            <DropdownSection>
              <SectionTitle element="h2">수익 창출</SectionTitle>
              {CategoryMenus.slice(9, 12).map((menu) => (
                <div
                  onMouseEnter={() => {
                    setCategoryName(`${menu.name}`);
                    setSubmenuHover(true);
                  }}
                  key={menu.id}
                >
                  <SectionItem className="sectionItem">
                    <SectionLink href={menu.to} id={`link-${menu.name}`}>
                      {menu.name}
                    </SectionLink>
                    <RightIcon id={menu.name}>
                      <ChevronRightIcon size={12} />
                    </RightIcon>
                  </SectionItem>
                </div>
              ))}
            </DropdownSection>

            <DropdownSection>
              <SectionTitle element="h2">커리어</SectionTitle>
              {CategoryMenus.slice(12, 17).map((menu) => (
                <div
                  onMouseEnter={() => {
                    setCategoryName(`${menu.name}`);
                    setSubmenuHover(true);
                  }}
                  key={menu.id}
                >
                  <SectionItem className="sectionItem">
                    <SectionLink href={menu.to} id={`link-${menu.name}`}>
                      {menu.name}
                    </SectionLink>
                    <RightIcon id={menu.name}>
                      <ChevronRightIcon size={12} />
                    </RightIcon>
                  </SectionItem>
                </div>
              ))}
            </DropdownSection>

            <DropdownSection>
              <SectionTitle element="h2">키즈</SectionTitle>
              {CategoryMenus.slice(17).map((menu) => (
                <div
                  onMouseEnter={() => {
                    setCategoryName(`${menu.name}`);
                    setSubmenuHover(true);
                  }}
                  key={menu.id}
                >
                  <SectionItem className="sectionItem">
                    <SectionLink href={menu.to} id={`link-${menu.name}`}>
                      {menu.name}
                    </SectionLink>
                    <RightIcon id={menu.name}>
                      <ChevronRightIcon size={12} />
                    </RightIcon>
                  </SectionItem>
                </div>
              ))}
            </DropdownSection>
          </CategoryDropdown>
        </CategoryDropdownGroup>

        {/*전체카테고리의 세부메뉴를 hover했을 때 우측에 추가로 나타나는 메뉴리스트*/}
        <AdditionalDropdownWrapper
          isSubmenuHover={isSubmenuHover}
          onMouseEnter={() => makeIconAppear(categoryName)}
          onMouseLeave={() => {
            makeIconDisappear(categoryName);
            setSubmenuHover(false);
          }}
          style={{ left: `221px` }}
        >
          <CategoryDropdownGroup>
            <CategoryDropdown>
              <DropdownSection>
                <SectionTitle element="h2">{categoryName}</SectionTitle>
                {CategoryMenus.find(
                  (menu) => menu.name === categoryName
                )?.submenus?.map((submenu) => (
                  <AdditionalSectionItem
                    key={submenu.id}
                    to={submenu.to}
                    className="sectionItem"
                  >
                    {submenu.name}
                  </AdditionalSectionItem>
                ))}
              </DropdownSection>
            </CategoryDropdown>
          </CategoryDropdownGroup>
        </AdditionalDropdownWrapper>
      </CategoryDropdownWrapper>
    </div>
  );
};

export default CategoryNavbar;
