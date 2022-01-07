import React, { useState } from "react";
import styled from "styled-components";
import {
  CloseIcon,
  IconButton,
  Theme,
  ButtonColor,
  ButtonSize,
  Body1,
} from "@class101/ui";

const BackgroundWrapper = styled.div<{ isOpened: boolean }>`
  width: 100%;
  height: 44px;
  background: rgb(236, 71, 0);
  cursor: pointer;
  animation: 500ms cubic-bezier(0.42, 0, 0.58, 1) 0s 1 normal forwards running;
  z-index: 2000;

  display: ${(props) => (props.isOpened === false ? "none" : "block")};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 8px 0px;
  box-sizing: border-box;
  height: 100%;

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
    padding: 6px 0px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const StyledIconButton = styled(IconButton)`
  margin-left: 16px;
  margin-right: -6px;
`;

const TopBanner = () => {
  const [openStatus, setOpenStatus] = useState(true);
  const onCloseBanner = () => {
    setOpenStatus(false);
    console.log(openStatus);
  };
  return (
    <BackgroundWrapper className="backgroundWrapper" isOpened={openStatus}>
      <Container>
        <Body1
          lg="Body1"
          sm="Body1"
          fontWeight="normal"
          color="white"
        >{`지금 가입하고 원하는 클래스 1개 무료 체험하기 >`}</Body1>
        <StyledIconButton
          type="button"
          icon={<CloseIcon />}
          theme={Theme.dark}
          color={ButtonColor.TRANSPARENT}
          size={ButtonSize.XSMALL}
          onClick={onCloseBanner}
        />
      </Container>
    </BackgroundWrapper>
  );
};

export default TopBanner;
