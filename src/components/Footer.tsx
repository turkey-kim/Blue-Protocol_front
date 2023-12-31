import {Link} from 'react-router-dom';
import {ReactComponent as ProtocolLogo} from '../assets/icons/blue-protocol.svg';
import {ReactComponent as DiscordLogo} from '../assets/icons/discord-logo.svg';
import {ReactComponent as KakaoLogo} from '../assets/icons/kakao-logo.svg';
import {OFFICIAL_URL, DISCORD_URL, KAKAO_URL} from '../constant';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Inner>
        <Nav>
          <NavTitle className="HeaderMenu">헤더</NavTitle>
          <NavContainer className="HeaderMenu">
            <StyledLink to="/">
              <FooterTextHeader>홈</FooterTextHeader>
            </StyledLink>
            <StyledLink to="/news">
              <FooterTextHeader>뉴스</FooterTextHeader>
            </StyledLink>
            <StyledLink to="/game">
              <FooterTextHeader>게임</FooterTextHeader>
            </StyledLink>
            <StyledLink to="/guide">
              <FooterTextHeader>가이드</FooterTextHeader>
            </StyledLink>
            <StyledLink to="/database">
              <FooterTextHeader>데이터베이스</FooterTextHeader>
            </StyledLink>
          </NavContainer>
        </Nav>
        <Nav>
          <NavTitle>커뮤니티</NavTitle>
          <NavContainer>
            <FooterTextCommunity>
              뮤리의 서재는 플레이어분들과 <FooterTextCommunityBR></FooterTextCommunityBR>
              소통하며 활동하고 있습니다.
            </FooterTextCommunity>
            <LogoContainer>
              <Logo1>
                <Discord
                  onClick={() => {
                    window.open(DISCORD_URL);
                  }}
                ></Discord>
              </Logo1>
              <Logo2>
                <KakaoTalk
                  onClick={() => {
                    window.open(KAKAO_URL);
                  }}
                ></KakaoTalk>
              </Logo2>
            </LogoContainer>
          </NavContainer>
        </Nav>
        <Nav>
          <NavTitle>블루 프로토콜_한국공식</NavTitle>
          <NavContainer>
            <Url
              onClick={() => {
                window.open(OFFICIAL_URL);
              }}
            ></Url>
          </NavContainer>
        </Nav>
      </Inner>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: #0000001a;
  padding-bottom: 20vh;
`;

const Inner = styled.div`
  display: flex;
  width: 1320px;

  margin: 0 5rem;
  justify-content: space-around;
  padding: 0 1.5rem 0 2rem;

  @media screen and (max-width: 990px) {
    display: block;
    margin: 0;
    padding: 0;
  }
`;

const Nav = styled.nav`
  display: block;
  cursor: default;
  color: #4d4d4d;
  @media screen and (max-width: 990px) {
    width: auto;
    padding-left: 5vw;
  }

  & > .HeaderMenu {
    @media screen and (max-width: 990px) {
      display: none;
    }
  }
`;

const NavTitle = styled.div`
  padding-top: 4rem;
  font-size: 1.8rem;
  font-weight: 600;
  font-family: 'Roboto';
  line-height: 32px;
  @media screen and (max-width: 990px) {
    font-size: 1.3rem;
  }
`;

const NavContainer = styled.div`
  padding-top: 3rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  cursor: default;
`;

const FooterTextCommunity = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 40px;
  font-family: 'Roboto';
  color: gray;
  @media screen and (max-width: 990px) {
    font-size: 1rem;
  }
`;

const FooterTextCommunityBR = styled.br`
  display: none;
  @media screen and (max-width: 990px) {
    display: flex;
  }
`;

const FooterTextHeader = styled(FooterTextCommunity)`
  cursor: pointer;
  &:hover {
    color: black;
  }
  @media screen and (max-width: 990px) {
    font-size: 1rem;
  }
`;

const Url = styled(ProtocolLogo)`
  cursor: pointer;
  path {
    fill: #68c3c4;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  right: 10%;
  @media screen and (max-width: 990px) {
    width: 60px;
    height: 60px;
  }
`;

const Logo1 = styled.div`
  display: flex;
  @media screen and (max-width: 990px) {
    width: 60px;
    height: 60px;
  }
`;

const Logo2 = styled.div`
  display: flex;
  margin-left: 1rem;
  @media screen and (max-width: 990px) {
    width: 60px;
    height: 60px;
  }
`;

const Discord = styled(DiscordLogo)`
  cursor: pointer;
`;

const KakaoTalk = styled(KakaoLogo)`
  cursor: pointer;
`;
