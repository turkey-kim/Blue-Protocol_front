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
              뮤리의 서재는 플레이어분들과 <FooterTextCommunityBR />
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
        <ColumnNavBox>
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
          <Nav>
            <NavTitle>콘텐츠 라이센스</NavTitle>
            <NavContainer>
              <NavList>
                <li>© Murie's Library. All Rights Reserved.</li>
                <li>© Smilegate Megaport. All Rights Reserved.</li>
                <li>© 2019 Bandai Namco Online Inc. </li>
                <li>© 2019 Bandai Namco Studios Inc.</li>
              </NavList>
            </NavContainer>
          </Nav>
        </ColumnNavBox>
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
  padding-bottom: 10vh;

  @media screen and (max-width: 990px) {
    padding-bottom: 4rem;
  }
`;

const Inner = styled.div`
  display: flex;
  width: 1320px;

  margin: 0 5rem;
  justify-content: space-around;
  padding: 0 1.5rem 0 2rem;

  @media screen and (max-width: 990px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`;

const ColumnNavBox = styled.div`
  display: flex;
  flex-direction: column;
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
    padding-top: 3rem;
    font-size: 1.3rem;
  }
`;

const NavContainer = styled.div`
  padding-top: 2rem;
  @media screen and (max-width: 990px) {
    padding-top: 1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  cursor: default;
`;

const NavList = styled.ul`
  & > * {
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 1rem;
    font-family: 'Roboto';
    color: gray;
  }
`;

const FooterTextCommunity = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 40px;
  font-family: 'Roboto';
  color: gray;
  @media screen and (max-width: 990px) {
    font-size: 1rem;
    line-height: 1.8;
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
  margin-top: 1.5rem;
  right: 10%;
  @media screen and (max-width: 990px) {
    margin-top: 5px;
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
