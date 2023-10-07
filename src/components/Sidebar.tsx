import {Link} from 'react-router-dom';
import {ReactComponent as ProtocolLogo} from '../assets/icons/blue-protocol.svg';
import {ReactComponent as DiscordLogo} from '../assets/icons/discord-logo.svg';
import {ReactComponent as KakaoLogo} from '../assets/icons/kakao-logo.svg';
import {OFFICIAL_URL, DISCORD_URL, KAKAO_URL} from '../constant';
import styled from 'styled-components';

interface Props {
  clicked: boolean;
  setClicked: any;
  MenuURL: any[];
}

const SideBar = ({clicked, setClicked, MenuURL}: Props) => {
  const Close = () => {
    setClicked(false);
  };

  return (
    <Container className={clicked ? 'open' : ''}>
      <List>
        {MenuURL.map((element: any, key: number) => (
          <MenuItem key={key} to={element.address} onClick={Close}>
            {element.name}
          </MenuItem>
        ))}
      </List>
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
      <NavContainer>
        <Url
          onClick={() => {
            window.open(OFFICIAL_URL);
          }}
        ></Url>
      </NavContainer>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  display: none;
  @media screen and (max-width: 990px) {
    display: block;
    z-index: 5;
    border-radius: 15px 0 0 15px;
    background-color: #fff;
    height: 100%;
    width: 100%;
    right: -100%;
    top: 0;
    position: fixed;
    transition: 0.5s ease;
    &.open {
      right: 0;
      transition: 0.5s ease;
    }
  }
`;

const List = styled.ul`
  display: none;
  @media screen and (max-width: 990px) {
    display: block;
    margin: 0;
    padding: 0;
  }
`;

const MenuItem = styled(Link)`
  display: none;
  @media screen and (max-width: 990px) {
    width: auto;
    display: block;
    margin-top: 9.5vh;
    padding-bottom: 10px;
    margin-left: 10px;
    text-decoration: none;
    color: #68c3c4e5;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    &:active {
      background-image: linear-gradient(to right, #b2dfe1 25%, #8193d5 100%);
      color: white;
    }
  }
`;

const NavContainer = styled.div`
  display: none;
  @media screen and (max-width: 990px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
  }
`;

const Url = styled(ProtocolLogo)`
  display: none;
  @media screen and (max-width: 990px) {
    display: block;
    cursor: pointer;
    path {
      fill: #68c3c4;
    }
  }
`;

const LogoContainer = styled.div`
  display: none;
  @media screen and (max-width: 990px) {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    width: auto;
    height: auto;
  }
`;

const Logo1 = styled.div`
  @media screen and (max-width: 990px) {
    display: none;
    @media screen and (max-width: 990px) {
      display: flex;
      width: 60px;
      height: 60px;
    }
  }
`;

const Logo2 = styled.div`
  display: none;
  @media screen and (max-width: 990px) {
    display: flex;
    margin-left: 1rem;
    width: 60px;
    height: 60px;
  }
`;

const Discord = styled(DiscordLogo)`
  display: none;
  @media screen and (max-width: 990px) {
    display: block;
    cursor: pointer;
  }
`;

const KakaoTalk = styled(KakaoLogo)`
  display: none;
  @media screen and (max-width: 990px) {
    display: block;
    cursor: pointer;
  }
`;
