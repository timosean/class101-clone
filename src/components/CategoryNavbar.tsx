import React, { useState, MouseEvent } from "react";
import styled from "styled-components";
import { Button, AnchorButton, DropDownIcon, Body1, Body2 } from "@class101/ui";
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

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
  }

  @media only screen and (max-width: 1023px) {
    padding: 0px 24px;
    overflow: auto;
  }

  @media only screen and (max-width: 1239px) {
    margin: 0px;
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
    font-weight: 400;

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
  margin-left: 112px;
  top: 52px;
  border-right: 1px solid rgb(239, 239, 239);
  border-bottom: 1px solid rgb(239, 239, 239);
  border-left: 1px solid rgb(239, 239, 239);
  border-image: initial;
  border-top: none;
  z-index: 51;
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

const SectionItem = styled(AnchorButton)`
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

//카테고리 바 컴포넌트
const CategoryNavbar = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const navbar = document.querySelector("#navbar");
  const navleft = navbar?.getBoundingClientRect().left;

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

  const CategoryMenus = [
    {
      id: 1,
      name: "디지털 드로잉",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed0030e",
      submenus: [
        {
          id: 11,
          name: "일러스트",
          to: "https://class101.net/search?category=613070fa5b76158cac88344a",
        },
        {
          id: 12,
          name: "컨셉아트",
          to: "https://class101.net/search?category=6114891dfe1ca7f7b31b4a23",
        },
        {
          id: 13,
          name: "캐릭터 드로잉",
          to: "https://class101.net/search?category=613070fa5b76158cac88344b",
        },
        {
          id: 14,
          name: "인물 드로잉",
          to: "https://class101.net/search?category=613070fa5b76158cac88344c",
        },
        {
          id: 15,
          name: "굿즈 · 이모티콘",
          to: "https://class101.net/search?category=613070fa5b76158cac88344d",
        },
        {
          id: 16,
          name: "웹툰",
          to: "https://class101.net/search?category=613070fa5b76158cac88344e",
        },
        {
          id: 17,
          name: "캘리그라피",
          to: "https://class101.net/search?category=613070fa5b76158cac88344f",
        },
        {
          id: 18,
          name: "더 새로운 디지털 드로잉",
          to: "https://class101.net/search?category=613070fa5b76158cac883450",
        },
      ],
    },
    {
      id: 2,
      name: "드로잉",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed00304",
      submenus: [
        {
          id: 20,
          name: "펜 · 연필",
          to: "https://class101.net/search?category=604f1c9756c3676f1ed00305",
        },
        {
          id: 21,
          name: "마카",
          to: "https://class101.net/search?category=604f1c9756c3676f1ed00306",
        },
        {
          id: 22,
          name: "색연필",
          to: "https://class101.net/search?category=604f1c9756c3676f1ed00307",
        },
        {
          id: 23,
          name: "수채화",
          to: "https://class101.net/search?category=604f1c9756c3676f1ed00308",
        },
        {
          id: 24,
          name: "오일파스텔",
          to: "https://class101.net/search?category=604f1c9756c3676f1ed00309",
        },
        {
          id: 25,
          name: "과슈 · 아크릴화",
          to: "https://class101.net/search?category=604f1c9756c3676f1ed0030a",
        },
        {
          id: 26,
          name: "유화",
          to: "https://class101.net/search?category=604f1c9756c3676f1ed0030b",
        },
        {
          id: 27,
          name: "동양화",
          to: "https://class101.net/search?category=604f1c9756c3676f1ed0030c",
        },
        {
          id: 28,
          name: "캘리그라피",
          to: "https://class101.net/search?category=604f1c9756c3676f1ed00312",
        },
        {
          id: 29,
          name: "더 새로운 드로잉",
          to: "https://class101.net/search?category=604f1c9756c3676f1ed0030d",
        },
      ],
    },
    {
      id: 3,
      name: "공예",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed00317",
    },
    {
      id: 4,
      name: "요리 · 음료",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed0034f",
    },
    {
      id: 5,
      name: "베이킹 · 디저트",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed0035e",
    },
    {
      id: 6,
      name: "음악",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed00365",
    },
    {
      id: 7,
      name: "운동",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed00373",
    },
    {
      id: 8,
      name: "라이프",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed0037e",
    },
    {
      id: 9,
      name: "사진 · 영상",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed00389",
    },
    {
      id: 10,
      name: "금융 · 재테크",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed003b3",
    },
    {
      id: 11,
      name: "창업 · 부업",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed003b7",
    },
    {
      id: 12,
      name: "성공 마인드",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed003c3",
    },
    {
      id: 13,
      name: "디자인",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed0038e",
    },
    {
      id: 14,
      name: "개발 · 데이터",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed00397",
    },
    {
      id: 15,
      name: "직무교육",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed003a2",
    },
    {
      id: 16,
      name: "글쓰기",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed003c4",
    },
    {
      id: 17,
      name: "언어 · 외국어",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed003cd",
    },
    {
      id: 18,
      name: "아동 교육",
      to: "https://class101.net/search?category=604f1c9756c3676f1ed003d6",
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
      >
        <CategoryDropdownGroup>
          <CategoryDropdown>
            <DropdownSection>
              <SectionTitle>크리에이티브</SectionTitle>
              {CategoryMenus.slice(0, 9).map((menu) => (
                <SectionItem key={menu.id} to={menu.to} className="sectionItem">
                  <span onMouseEnter={() => setCategoryName(`${menu.name}`)}>
                    {menu.name}
                  </span>
                </SectionItem>
              ))}
            </DropdownSection>

            <DropdownSection>
              <SectionTitle>수익 창출</SectionTitle>
              {CategoryMenus.slice(9, 12).map((menu) => (
                <SectionItem key={menu.id} to={menu.to} className="sectionItem">
                  <span onMouseEnter={() => setCategoryName(`${menu.name}`)}>
                    {menu.name}
                  </span>
                </SectionItem>
              ))}
            </DropdownSection>

            <DropdownSection>
              <SectionTitle>커리어</SectionTitle>
              {CategoryMenus.slice(12, 17).map((menu) => (
                <SectionItem key={menu.id} to={menu.to} className="sectionItem">
                  <span onMouseEnter={() => setCategoryName(`${menu.name}`)}>
                    {menu.name}
                  </span>
                </SectionItem>
              ))}
            </DropdownSection>

            <DropdownSection>
              <SectionTitle>키즈</SectionTitle>
              {CategoryMenus.slice(17).map((menu) => (
                <SectionItem key={menu.id} to={menu.to} className="sectionItem">
                  <span onMouseEnter={() => setCategoryName(`${menu.name}`)}>
                    {menu.name}
                  </span>
                </SectionItem>
              ))}
            </DropdownSection>
          </CategoryDropdown>
        </CategoryDropdownGroup>
      </CategoryDropdownWrapper>
    </div>
  );
};

export default CategoryNavbar;
