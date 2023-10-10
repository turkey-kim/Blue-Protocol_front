import styled from 'styled-components';
import {PUBLIC_PATH} from '../constant';
import {ReactComponent as MainLogo} from '../assets/icons/main-logo.svg';
import {ReactComponent as TextLogo} from '../assets/icons/text-logo.svg';

const Intro = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo></Logo>
        <Title>
          <TextLogo />
        </Title>
        <SubTitle>기억을 잃은 채 별의 파멸이라는 거대한 운명에 맞서는 당신을 위한 도서관</SubTitle>
      </LogoContainer>
    </Container>
  );
};

export default Intro;

const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 60vh;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: default;
  z-index: -1;
  background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.75) 0.5%,
      rgba(20, 20, 20, 0.5) 25%,
      rgba(20, 20, 20, 0.3) 50%,
      rgba(20, 20, 20, 0.5) 95%,
      rgba(20, 20, 20, 0.75) 100%
    ),
    url(${PUBLIC_PATH}/images/main-page.jpg);
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
  font-size: 35px;
  margin: 0;

  @media screen and (max-width: 990px) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.p`
  color: white;
  opacity: 0.8;
  margin: 1.2rem 0;
  font-size: 20px;
  text-align: center;

  @media screen and (max-width: 990px) {
    padding: 1rem;
  }
`;
