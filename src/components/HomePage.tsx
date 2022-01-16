import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Timedeal from "../Timedeal";
import MDClass from "../MDClass";
import PopularEvent from "../PopularEvent";
import OpenSoon from "../OpenSoon";
import { Subtitle1, Button, ButtonColor } from "@class101/ui";
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { MdAlarm } from "react-icons/md";
import { GiHighFive } from "react-icons/gi";
import { IoMdThumbsUp } from "react-icons/io";

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

  @media only screen and (max-width: 1023px) {
    margin-top: 48px;
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
  display: inline-flex;
  vertical-align: middle;
  background: none;
  line-height: 20px;
  letter-spacing: -0.2px;

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

const StyledAnchorButton = styled.a`
  background: none;
  font-weight: bold;
  color: rgb(162, 162, 162);
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background: none;
    color: rgb(202, 202, 202);
    text-decoration: underline;
  }
`;

const SectionWOSideNavCarousel = styled.div`
  margin: 16px -24px 0px;

  @media only screen and (min-width: 1024px) {
    margin: 24px 0px 0px;
  }
`;

const CarouselButton = styled.button`
  color: rgb(26, 26, 26);
  background-color: transparent;
  border: none;
  font-size: 24px;

  position: absolute;
  z-index: 2;
  width: 40px;
  height: 40px;
  top: 100px;
  transform: translateY(-50%) translateX(-52px);

  display: inline-flex;
  flex: 0 0 auto;
  vertical-align: middle;
  padding: 0px;
  border-radius: 3px;
  transition: background-color 0.1s ease 0s;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgb(248, 248, 248);
  }

  &:disabled {
    color: rgb(239, 239, 239);
    cursor: not-allowed;
  }

  @media only screen and (max-width: 1239px) {
    display: none;
  }
`;

const SwiperContainer = styled.div`
  margin: 0px auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0px;
  z-index: 1;
  box-sizing: border-box;

  @media only screen and (max-width: 1023px) {
    padding: 0px 24px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const SwiperWrapper = styled.div`
  transition-duration: 400ms;
  transform: translate3d(0px, 0px, 0px);
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform, -webkit-transform;
  box-sizing: content-box;
`;

const SwiperSlide = styled.div`
  height: 100%;
  flex-shrink: 0;
  position: relative;
  transition-property: transform;

  @media only screen and (min-width: 1023px) {
    width: calc(25% - 24px);
    margin-right: 24px;
  }

  @media only screen and (max-width: 1022px) {
    width: calc(50% - 16px);
    margin-right: 16px;
  }

  &.popEvent {
    @media only screen and (max-width: 1022px) {
      width: calc(100% - 16px);
      margin-right: 16px;
    }
  }
`;

const RatioImageContainer = styled.span`
  position: relative;
  border-radius: 3px;
  display: block;
  overflow: hidden;
  font-size: 0px;
  padding-top: 75%;
  background: rgb(238, 238, 238);
`;

const HeartButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  border-radius: 100%;
  z-index: 100;
  display: inline-flex;
  flex: 0 0 auto;
  vertical-align: middle;
  padding: 0px;
  background-color: transparent;
  width: 32px;
  height: 32px;
  transition: background-color 0.1s ease 0s;
  border: 0px;
  outline: none;
  margin: 0px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 24px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media only screen and (max-width: 1023px) {
    top: 4px;
    right: 6px;
  }
`;

const ProductCardBadge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;

  @media only screen and (min-width: 1024px) {
    top: 12px;
    left: 12px;
  }
`;

const BadgeContext = styled.div`
  background-color: rgb(88, 32, 207);
  color: rgb(255, 255, 255);
  padding: 4px 6px;
  border-radius: 1px;
  font-size: 9px;

  @media only screen and (min-width: 1024px) {
    padding: 6px 8px;
    border-radius: 2px;
    font-size: 11px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: normal;
    margin: 0px;
  }
`;

const TimesaleBadge = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  width: 100%;
  padding-right: 6px;
  border-radius: 3px;
  background-color: rgb(26, 26, 26);
  padding-left: 6px;
  box-sizing: border-box;

  @media only screen and (min-width: 1024px) {
    padding-left: 7px;
  }
`;

const TimesaleText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3px;
  white-space: nowrap;
  font-size: 9px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  line-height: 12px;
  letter-spacing: normal;
`;

const TimesaleDate = styled.div`
  margin-left: auto;
  font-size: 9px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  line-height: 12px;
  letter-spacing: normal;
`;
const CardTitle = styled.div`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
  color: rgb(26, 26, 26);
  height: 40px;
  overflow: hidden;
  margin: 4px 0px 8px;
`;

const LikeThumb = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 4px;
`;

const LikeThumbFrame = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`;

const CountTag = styled.div`
  font-size: 11px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: normal;
  margin: 0px 8px 0px 0px;
  display: flex;
  align-items: center;
  color: rgb(162, 162, 162);
`;

const CountIcon = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  height: 12px;
  margin-right: 2px;
  font-size: 12px;
`;

const Discount = styled.span`
  margin-right: 4px;
  padding: 0;
  border: 0;
  font-size: 0.8125rem;
  line-height: 1.125rem;
  font-weight: 700;
  color: #fd3049;
`;

const OriginalPrice = styled(Discount)`
  color: #1a1a1a;
  margin-right: 8px;
`;

const LearnMonth = styled.span`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 0.6875rem;
  line-height: 0.875rem;
  font-weight: 400;
  color: #a2a2a2;
`;

const MDRecommendSection = styled.section`
  position: relative;
  margin-top: 72px;

  @media only screen and (max-width: 1023px) {
    margin-top: 48px;
  }
`;

const OpenSoonSection = styled.section`
  position: relative;
  margin-top: 48px;

  @media only screen and (max-width: 1023px) {
    margin-top: 24px;
  }
`;

const HomePage = () => {
  //-----------------------------------------------특가 캐로슬-------------------------------------------------------
  const [tdCount, setTdCount] = useState(0);

  //특가 캐로슬에서 이전버튼 클릭 시
  const onLeftBtnClick = () => {
    setTdCount((num) => num - 1);
  };

  //특가 캐로슬에서 다음버튼 클릭 시
  const onRightBtnClick = () => {
    setTdCount((num) => num + 1);
  };

  useEffect(() => {
    const wrapper = document.querySelector(".swiper-wrapper") as HTMLDivElement;
    wrapper.style.transform = `translate3d(${-300 * tdCount}px, 0, 0)`;
  }, [tdCount]);

  //-----------------------------------------------MD 캐로슬-------------------------------------------------------
  const [mdCount, setMdCount] = useState(0);

  //MD 캐로슬에서 이전버튼 클릭 시
  const onMdLeftClick = () => {
    setMdCount((num) => num - 1);
  };

  //MD 캐로슬에서 다음버튼 클릭 시
  const onMdRightClick = () => {
    setMdCount((num) => num + 1);
  };

  useEffect(() => {
    const wrapper = document.querySelector(".md-wrapper") as HTMLDivElement;
    wrapper.style.transform = `translate3d(${-300 * mdCount}px, 0, 0)`;
  }, [mdCount]);

  //-----------------------------------------------인기 이벤트 캐로슬-------------------------------------------------------
  const [peCount, setPeCount] = useState(0);
  const todayDate = new Date().getDate();

  //인기 이벤트 캐로슬에서 이전버튼 클릭 시
  const onPeLeftClick = () => {
    setPeCount((num) => num - 1);
  };

  //인기 이벤트 캐로슬에서 다음버튼 클릭 시
  const onPeRightClick = () => {
    setPeCount((num) => num + 1);
  };

  useEffect(() => {
    const wrapper = document.querySelector(".popular-event") as HTMLDivElement;
    wrapper.style.transform = `translate3d(${-400 * peCount}px, 0, 0)`;
  }, [peCount]);

  //D-day 계산하는 함수
  const countDday = (current: number, lastDate: string) => {
    const finishDate: number = new Date(lastDate).getDate();
    const diff: number = finishDate - current;

    if (diff === 0) {
      return "D-day";
    } else return `D-${diff}`;
  };

  //-----------------------------------------------오픈 예정 캐로슬-------------------------------------------------------
  const [osCount, setOsCount] = useState(0);

  //인기 이벤트 캐로슬에서 이전버튼 클릭 시
  const onOsLeftClick = () => {
    setOsCount((num) => num - 1);
  };

  //인기 이벤트 캐로슬에서 다음버튼 클릭 시
  const onOsRightClick = () => {
    setOsCount((num) => num + 1);
  };

  useEffect(() => {
    const wrapper = document.querySelector(".opensoon-class") as HTMLDivElement;
    wrapper.style.transform = `translate3d(${-300 * osCount}px, 0, 0)`;
  }, [osCount]);

  const dateDiff = (lastDate: string) => {
    const finishDate = new Date(lastDate).getTime();
    const startDate = new Date().getTime();

    const diff = Math.ceil(
      Math.abs(finishDate - startDate) / (1000 * 3600 * 24)
    );
    return diff;
  };

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
          <SpacingBox />
          <SectionBox>
            <div data-element-name="time-deal-section">
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
                  <StyledAnchorButton href="https://class101.net/time-deal?type=klass">
                    전체 클래스 보기
                  </StyledAnchorButton>
                </AnchorButtonWrapper>
              </SectionTitle>

              <SectionWOSideNavCarousel>
                <div
                  className="OutsideNavigationCarousel"
                  style={{ position: "relative" }}
                >
                  <CarouselButton
                    id="prevBtn"
                    style={{ left: "0px" }}
                    onClick={onLeftBtnClick}
                    disabled={tdCount === 0}
                  >
                    <FiChevronLeft />
                  </CarouselButton>
                  <SwiperContainer>
                    <SwiperWrapper className="swiper-wrapper">
                      {Timedeal.map((item) => (
                        <SwiperSlide key={item.id}>
                          <div
                            className="slide-item"
                            style={{
                              display: "flex",
                              alignItems: "stretch",
                              flexDirection: "column",
                            }}
                          >
                            <div
                              className="card-container"
                              style={{ position: "relative", width: "100%" }}
                            >
                              <div
                                className="card-coverimage-area"
                                style={{
                                  overflow: "hidden",
                                  borderRadius: "3px",
                                  marginBottom: "8px",
                                }}
                              >
                                <RatioImageContainer>
                                  <picture
                                    className="ResponsiveImage"
                                    style={{
                                      top: "0px",
                                      left: "0px",
                                      width: "100%",
                                      height: "100%",
                                      position: "absolute",
                                    }}
                                  >
                                    <img src={item.img} alt={item.title} />
                                  </picture>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "stretch",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <HeartButton type="button">
                                      <FiHeart style={{ color: "white" }} />
                                    </HeartButton>
                                  </div>
                                  <ProductCardBadge>
                                    <BadgeContext>
                                      {item.coupon}만원 쿠폰
                                    </BadgeContext>
                                  </ProductCardBadge>
                                </RatioImageContainer>
                              </div>

                              <div
                                className="card-body"
                                style={{
                                  margin: "0",
                                  padding: "0",
                                  border: "0",
                                  fontSize: "100%",
                                  verticalAlign: "baseline",
                                }}
                              >
                                <div
                                  className="spacing-box"
                                  style={{ marginBottom: "8px" }}
                                >
                                  <TimesaleBadge>
                                    <MdAlarm
                                      style={{
                                        width: "12px",
                                        height: "12px",
                                        fontSize: "12px",
                                        color: "white",
                                      }}
                                    />
                                    <TimesaleText>타임딜 종료까지</TimesaleText>
                                    <TimesaleDate>1일</TimesaleDate>
                                  </TimesaleBadge>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    width: "100%",
                                    alignItems: "stretch",
                                    flexDirection: "row",
                                  }}
                                >
                                  <p
                                    style={{
                                      margin: "0",
                                      padding: "0",
                                      border: "0",
                                      fontSize: "0.6875rem",
                                      lineHeight: "0.875rem",
                                      fontWeight: "700",
                                      color: "#000000",
                                    }}
                                  >
                                    {item.creator}
                                  </p>
                                </div>
                                <CardTitle>
                                  [💣오늘의 특가] {item.title}
                                </CardTitle>
                                <LikeThumb>
                                  <LikeThumbFrame>
                                    <CountTag>
                                      <CountIcon>
                                        <AiFillHeart
                                          style={{ fontSize: "12px" }}
                                        />
                                      </CountIcon>
                                      {item.like}
                                    </CountTag>
                                    <CountTag>
                                      <CountIcon>
                                        <IoMdThumbsUp
                                          style={{ fontSize: "12px" }}
                                        />
                                      </CountIcon>
                                      {item.thumsUp}
                                    </CountTag>
                                  </LikeThumbFrame>
                                </LikeThumb>
                              </div>

                              <div
                                style={{
                                  flex: "none",
                                  backgroundColor: "#FAFAFA",
                                  width: "100%",
                                  height: "1px",
                                  marginTop: "8px",
                                  marginBottom: "8px",
                                }}
                              />

                              <div>
                                <Discount>
                                  {Math.ceil(
                                    (item.price.salePrice * 100) /
                                      item.price.originalPrice
                                  )}
                                  %
                                </Discount>
                                <OriginalPrice>
                                  월 {item.price.salePrice}원
                                </OriginalPrice>
                                <LearnMonth>
                                  ({item.price.installment}개월)
                                </LearnMonth>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </SwiperWrapper>
                  </SwiperContainer>
                  <CarouselButton
                    id="nextBtn"
                    style={{
                      right: "0px",
                      transform: "translateY(-50%) translateX(52px)",
                    }}
                    onClick={onRightBtnClick}
                    disabled={tdCount === 6}
                  >
                    <FiChevronRight />
                  </CarouselButton>
                </div>
              </SectionWOSideNavCarousel>
            </div>
          </SectionBox>

          <SpacingBox />

          <SectionBox>
            <div data-test-id="recommend-product-section">
              <MDRecommendSection>
                <div
                  className="header"
                  style={{
                    marginBottom: "20px",
                    width: "100%",
                    maxWidth: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className="headerTop"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Subtitle1 element="h2">MD 추천 클래스</Subtitle1>
                  </div>
                </div>
                <SectionWOSideNavCarousel>
                  <div
                    className="OutsideNavigationCarousel"
                    style={{ position: "relative" }}
                  >
                    <CarouselButton
                      id="prevBtn"
                      style={{ left: "0px" }}
                      disabled={mdCount === 0}
                      onClick={onMdLeftClick}
                    >
                      <FiChevronLeft />
                    </CarouselButton>
                    <SwiperContainer>
                      <SwiperWrapper className="md-wrapper">
                        {MDClass.map((item) => (
                          <SwiperSlide key={item.id}>
                            <div
                              className="slide-item"
                              style={{
                                display: "flex",
                                alignItems: "stretch",
                                flexDirection: "column",
                              }}
                            >
                              <div
                                className="card-container"
                                style={{ position: "relative", width: "100%" }}
                              >
                                <div
                                  className="card-coverimage-area"
                                  style={{
                                    overflow: "hidden",
                                    borderRadius: "3px",
                                    marginBottom: "8px",
                                  }}
                                >
                                  <RatioImageContainer>
                                    <picture
                                      className="ResponsiveImage"
                                      style={{
                                        top: "0px",
                                        left: "0px",
                                        width: "100%",
                                        height: "100%",
                                        position: "absolute",
                                      }}
                                    >
                                      <img src={item.img} alt={item.title} />
                                    </picture>
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "stretch",
                                        flexDirection: "column",
                                      }}
                                    >
                                      <HeartButton type="button">
                                        <FiHeart style={{ color: "white" }} />
                                      </HeartButton>
                                    </div>
                                    {item.coupon !== 0 && (
                                      <ProductCardBadge>
                                        <BadgeContext>
                                          {item.coupon}만원 쿠폰
                                        </BadgeContext>
                                      </ProductCardBadge>
                                    )}
                                  </RatioImageContainer>
                                </div>

                                <div
                                  className="card-body"
                                  style={{
                                    margin: "0",
                                    padding: "0",
                                    border: "0",
                                    fontSize: "100%",
                                    verticalAlign: "baseline",
                                  }}
                                >
                                  <div
                                    className="spacing-box"
                                    style={{ marginBottom: "8px" }}
                                  />
                                  <div
                                    style={{
                                      display: "flex",
                                      width: "100%",
                                      alignItems: "stretch",
                                      flexDirection: "row",
                                    }}
                                  >
                                    <p
                                      style={{
                                        margin: "0",
                                        padding: "0",
                                        border: "0",
                                        fontSize: "0.6875rem",
                                        lineHeight: "0.875rem",
                                        fontWeight: "700",
                                        color: "#000000",
                                      }}
                                    >
                                      {item.creator}
                                    </p>
                                  </div>
                                  <CardTitle>{item.title}</CardTitle>
                                  <LikeThumb>
                                    <LikeThumbFrame>
                                      <CountTag>
                                        <CountIcon>
                                          <AiFillHeart
                                            style={{ fontSize: "12px" }}
                                          />
                                        </CountIcon>
                                        {item.like}
                                      </CountTag>
                                      {item.thumsUp !== 0 && (
                                        <CountTag>
                                          <CountIcon>
                                            <IoMdThumbsUp
                                              style={{ fontSize: "12px" }}
                                            />
                                          </CountIcon>
                                          {item.thumsUp}
                                        </CountTag>
                                      )}
                                    </LikeThumbFrame>
                                  </LikeThumb>
                                </div>

                                <div
                                  style={{
                                    flex: "none",
                                    backgroundColor: "#FAFAFA",
                                    width: "100%",
                                    height: "1px",
                                    marginTop: "8px",
                                    marginBottom: "8px",
                                  }}
                                />

                                <div>
                                  <Discount>
                                    {Math.ceil(
                                      (item.price.salePrice * 100) /
                                        item.price.originalPrice
                                    )}
                                    %
                                  </Discount>
                                  <OriginalPrice>
                                    월 {item.price.salePrice}원
                                  </OriginalPrice>
                                  <LearnMonth>
                                    ({item.price.installment}개월)
                                  </LearnMonth>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </SwiperWrapper>
                    </SwiperContainer>
                    <CarouselButton
                      id="nextBtn"
                      style={{
                        right: "0px",
                        transform: "translateY(-50%) translateX(52px)",
                      }}
                      disabled={mdCount === 3}
                      onClick={onMdRightClick}
                    >
                      <FiChevronRight />
                    </CarouselButton>
                  </div>
                </SectionWOSideNavCarousel>
              </MDRecommendSection>
            </div>
          </SectionBox>

          <SpacingBox />

          <SectionBox>
            <SectionTitle>
              <a
                href="https://class101.net/events?index=0&onGoingOnly=true&status=ENTIRE"
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
                  <Subtitle1 element="h2">진행중인 인기 이벤트</Subtitle1>
                </div>
              </a>
              <AnchorButtonWrapper>
                <StyledAnchorButton href="https://class101.net/events?index=0&onGoingOnly=true&status=ENTIRE">
                  전체 이벤트 보기
                </StyledAnchorButton>
              </AnchorButtonWrapper>
            </SectionTitle>
            <SectionWOSideNavCarousel>
              <div
                className="OutsideNavigationCarousel"
                style={{ position: "relative" }}
              >
                <CarouselButton
                  id="prevBtn"
                  style={{ left: "0px", top: "135px" }}
                  disabled={peCount === 0}
                  onClick={onPeLeftClick}
                >
                  <FiChevronLeft />
                </CarouselButton>
                <SwiperContainer>
                  <SwiperWrapper className="popular-event">
                    {PopularEvent.map((item) => (
                      <SwiperSlide key={item.id} className="popEvent">
                        <div
                          className="slide-item"
                          style={{
                            display: "flex",
                            alignItems: "stretch",
                            flexDirection: "column",
                          }}
                        >
                          <div
                            className="card-container"
                            style={{ position: "relative", width: "100%" }}
                          >
                            <div
                              className="card-coverimage-area"
                              style={{
                                overflow: "hidden",
                                borderRadius: "3px",
                                marginBottom: "10px",
                              }}
                            >
                              <RatioImageContainer>
                                <picture
                                  className="ResponsiveImage"
                                  style={{
                                    top: "0px",
                                    left: "0px",
                                    width: "100%",
                                    height: "100%",
                                    position: "absolute",
                                  }}
                                >
                                  <img src={item.img} alt={item.title} />
                                </picture>
                              </RatioImageContainer>
                            </div>

                            <div
                              className="card-body"
                              style={{
                                margin: "0",
                                padding: "0",
                                border: "0",
                                fontSize: "100%",
                                verticalAlign: "baseline",
                                height: "20px",
                              }}
                            >
                              <CardTitle
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "700",
                                  color: "rgb(26, 26, 26)",
                                  lineHeight: "20px",
                                }}
                              >
                                {item.title}
                              </CardTitle>
                              <div
                                className="spacing-box"
                                style={{ marginTop: "2px" }}
                              />
                            </div>
                            <div>
                              <Discount>
                                {item.period.startDate === "0"
                                  ? `상시 이벤트`
                                  : countDday(
                                      todayDate,
                                      item.period.finishDate
                                    )}
                              </Discount>
                              <OriginalPrice>
                                {item.period.startDate !== "0" &&
                                  `${item.period.startDate}~${item.period.finishDate}`}
                              </OriginalPrice>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </SwiperWrapper>
                </SwiperContainer>
                <CarouselButton
                  id="nextBtn"
                  style={{
                    right: "0px",
                    top: "135px",
                    transform: "translateY(-50%) translateX(52px)",
                  }}
                  disabled={peCount === 4}
                  onClick={onPeRightClick}
                >
                  <FiChevronRight />
                </CarouselButton>
              </div>
            </SectionWOSideNavCarousel>
          </SectionBox>

          <SpacingBox />

          <SectionBox>
            <OpenSoonSection>
              <SectionTitle>
                <a
                  href="https://class101.net/products/preview/list"
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
                    <Subtitle1 element="h2">오픈 예정 클래스</Subtitle1>
                  </div>
                  <p
                    style={{
                      color: "#a2a2a2",
                      margin: "4px 0 0",
                      fontSize: "14px",
                    }}
                  >
                    오픈 예정인 클래스를 응원하면 얼리버드 오픈 시 알려드려요!
                  </p>
                </a>
                <AnchorButtonWrapper>
                  <StyledAnchorButton href="https://class101.net/products/preview/list">
                    전체 클래스 보기
                  </StyledAnchorButton>
                </AnchorButtonWrapper>
              </SectionTitle>

              <SectionWOSideNavCarousel>
                <div
                  className="OutsideNavigationCarousel"
                  style={{ position: "relative" }}
                >
                  <CarouselButton
                    id="prevBtn"
                    style={{ left: "0px", top: "100px" }}
                    disabled={osCount === 0}
                    onClick={onOsLeftClick}
                  >
                    <FiChevronLeft />
                  </CarouselButton>
                  <SwiperContainer>
                    <SwiperWrapper className="opensoon-class">
                      {OpenSoon.map((item) => (
                        <SwiperSlide key={item.id} style={{ width: "276px" }}>
                          <div
                            className="slide-item"
                            style={{
                              display: "flex",
                              alignItems: "stretch",
                              flexDirection: "column",
                            }}
                          >
                            <div
                              className="card-container"
                              style={{ position: "relative", width: "100%" }}
                            >
                              <div
                                className="card-coverimage-area"
                                style={{
                                  overflow: "hidden",
                                  borderRadius: "3px",
                                  marginBottom: "8px",
                                }}
                              >
                                <RatioImageContainer>
                                  <picture
                                    className="ResponsiveImage"
                                    style={{
                                      top: "0px",
                                      left: "0px",
                                      width: "100%",
                                      height: "100%",
                                      position: "absolute",
                                    }}
                                  >
                                    <img src={item.img} alt={item.title} />
                                  </picture>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "stretch",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <HeartButton type="button">
                                      <FiHeart style={{ color: "white" }} />
                                    </HeartButton>
                                  </div>
                                </RatioImageContainer>
                              </div>

                              <div
                                className="card-body"
                                style={{
                                  margin: "0",
                                  padding: "0",
                                  border: "0",
                                  fontSize: "100%",
                                  verticalAlign: "baseline",
                                }}
                              >
                                <div
                                  className="spacing-box"
                                  style={{ marginBottom: "8px" }}
                                />

                                <div
                                  style={{
                                    display: "flex",
                                    width: "100%",
                                    alignItems: "stretch",
                                    flexDirection: "row",
                                  }}
                                >
                                  <p
                                    style={{
                                      margin: "0",
                                      padding: "0",
                                      border: "0",
                                      fontSize: "0.6875rem",
                                      lineHeight: "0.875rem",
                                      fontWeight: "700",
                                      color: "#000000",
                                    }}
                                  >
                                    {item.creator}
                                  </p>
                                </div>
                                <CardTitle>{item.title}</CardTitle>
                                <LikeThumb>
                                  <LikeThumbFrame>
                                    <CountTag style={{ color: "#fd3049" }}>
                                      <CountIcon>
                                        <GiHighFive
                                          style={{
                                            fontSize: "12px",
                                            color: "#fd3049",
                                          }}
                                        />
                                      </CountIcon>
                                      {(item.cheer.score * 100) /
                                        item.cheer.goal}
                                      % 달성
                                    </CountTag>
                                    <CountTag>
                                      <CountIcon>
                                        <AiFillHeart
                                          style={{ fontSize: "12px" }}
                                        />
                                      </CountIcon>
                                      {item.cheer.score}
                                    </CountTag>
                                  </LikeThumbFrame>
                                </LikeThumb>
                              </div>

                              <div
                                style={{
                                  flex: "none",
                                  backgroundColor: "#FAFAFA",
                                  width: "100%",
                                  height: "1px",
                                  marginTop: "8px",
                                  marginBottom: "8px",
                                }}
                              />

                              <div
                                style={{ display: "flex", flexFlow: "wrap" }}
                              >
                                <div
                                  style={{
                                    fontSize: "11px",
                                    color: "rgb(162,162,162)",
                                    lineHeight: "16px",
                                  }}
                                >
                                  응원 마감까지 &nbsp;
                                </div>
                                <div
                                  style={{
                                    fontSize: "11px",
                                    color: "rgb(26, 26, 26)",
                                    lineHeight: "16px",
                                  }}
                                >
                                  {dateDiff(item.cheer.finishDate)}일 남음
                                </div>
                              </div>

                              <div
                                className="spacing-box"
                                style={{ marginTop: "8px" }}
                              />

                              <Button fill color={ButtonColor.ORANGE_LIGHT}>
                                응원하기
                              </Button>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </SwiperWrapper>
                  </SwiperContainer>
                  <CarouselButton
                    id="nextBtn"
                    style={{
                      right: "0px",
                      top: "100px",
                      transform: "translateY(-50%) translateX(52px)",
                    }}
                    disabled={osCount === 5}
                    onClick={onOsRightClick}
                  >
                    <FiChevronRight />
                  </CarouselButton>
                </div>
              </SectionWOSideNavCarousel>
            </OpenSoonSection>
          </SectionBox>

          <SpacingBox style={{ marginBottom: "300px" }} />
        </div>
      </OuterDiv>
    </div>
  );
};

export default HomePage;
