import styled from "styled-components";
import { publicPath } from "../../constant";
import { ReactComponent as MainLogo } from "../../assets/icons/main-logo.svg";

const Section_main = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo></Logo>
        <Title>뮤리의 서재</Title>
        <SubTitle>
          기억을 잃은 채 별의 파멸이라는 거대한 운명에 맞서는 당신을 위한 도서관
        </SubTitle>
      </LogoContainer>
    </Container>
  );
};

export default Section_main;

const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 85vh;
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
  top: 26%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled(MainLogo)`
  width: 180px;
  height: 180px;
`;

const Title = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 50px;
  margin: 0;

  @media screen and (max-width: 990px) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.p`
  color: white;
  opacity: 0.8;
  margin: 0.5rem 0;
  font-size: 20px;
`;
