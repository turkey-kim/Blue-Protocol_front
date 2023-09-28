import {Link} from 'react-router-dom';
import React from 'react';
import {ReactComponent as ProtocolLogo} from '../assets/icons/blue-protocol.svg';
import {ReactComponent as DiscordLogo} from '../assets/icons/discord-logo.svg';
import {ReactComponent as KakaoLogo} from '../assets/icons/kakao-logo.svg';
import styled from 'styled-components';

const Footer = () => {
  const officialUrl = 'https://blueprotocol.game.onstove.com';
  const discordUrl = 'https://discord.gg/p6ruJWERbH';
  return (
    <Container>
      <Inner>
        <Nav>
          <NavTitle>헤더</NavTitle>
          <NavContainer>
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
            <FooterTextCommunity>뮤리의 서재는 플레이어분들과 소통하며 활동하고 있습니다.</FooterTextCommunity>
            <LogoContainer>
              <Logo1>
                <Discord
                  onClick={() => {
                    window.open(discordUrl);
                  }}
                ></Discord>
              </Logo1>
              <Logo2>
                <KakaoTalk
                  onClick={() => {
                    window.open(discordUrl);
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
                window.open(officialUrl);
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
  }
`;

const Nav = styled.nav`
  display: block;
  cursor: default;
  color: #4d4d4d;
`;

const NavTitle = styled.div`
  padding-top: 4rem;
  font-size: 1.8rem;
  font-weight: 600;
  font-family: 'Roboto';
  line-height: 32px;
`;

const NavContainer = styled.div`
  padding-top: 3rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  cursor: default;
`;

const FooterTextCommunity = styled.span`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 40px;
  font-family: 'Roboto';
  color: gray;
`;

const FooterTextHeader = styled(FooterTextCommunity)`
  cursor: pointer;
  &:hover {
    color: black;
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
`;

const Logo1 = styled.div`
  display: flex;
`;

const Logo2 = styled.div`
  display: flex;
  margin-left: 1rem;
`;

const Discord = styled(DiscordLogo)`
  cursor: pointer;
`;

const KakaoTalk = styled(KakaoLogo)`
  cursor: pointer;
`;
