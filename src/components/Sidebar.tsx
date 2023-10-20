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
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  display: none;
  @media screen and (max-width: 990px) {
    display: block;
    z-index: 15;
    background-color: #1c1c1c;
    height: 100%;
    width: 100%;
    right: -100%;
    top: 0;
    position: fixed;
    &.open {
      right: 0;
    }
  }
`;

const List = styled.ul`
  display: none;
  @media screen and (max-width: 990px) {
    display: block;
    margin-top: 9.5vh;
    padding: 1rem;
  }
`;

const MenuItem = styled(Link)`
  display: none;
  @media screen and (max-width: 990px) {
    display: block;
    text-decoration: none;
    width: auto;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    margin-bottom: 5vh;
    text-align: left;
    color: #fff;
  }
`;
