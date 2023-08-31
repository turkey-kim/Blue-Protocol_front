import React from "react";
import styled from "styled-components";
import { publicPath } from "../../constant";
import { ReactComponent as MainLogo } from "../../assets/icons/main-logo.svg";

const Section_main = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo></Logo>
        <Title>KR DATABASE</Title>
      </LogoContainer>
    </Container>
  );
};

export default Section_main;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 925px;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.75) 0.5%,
      rgba(20, 20, 20, 0.5) 25%,
      rgba(20, 20, 20, 0.3) 50%,
      rgba(20, 20, 20, 0.5) 95%,
      rgba(20, 20, 20, 0.75) 100%
    ),
    url(${publicPath}/images/main-page.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const LogoContainer = styled.div`
  z-index: 1000;
  position: absolute;
  top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled(MainLogo)``;

const Title = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 50px;
  margin-top: 0;

  @media screen and (max-width: 990px) {
    font-size: 2.5rem;
  }
`;
