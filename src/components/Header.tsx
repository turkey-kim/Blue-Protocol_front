import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as TextLogo} from '../assets/icons/text-logo.svg';
import {ReactComponent as MenuLogo} from '../assets/icons/menu-logo.svg';
import {ReactComponent as XLogo} from '../assets/icons/x-logo.svg';
import {ReactComponent as MainLogo} from '../assets/icons/main-logo.svg';
import SideBar from './Sidebar';
import AdminButton from './AdminButton';
import {loginState} from '../states/atoms';
import {useRecoilState} from 'recoil';

const Header = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useRecoilState(loginState);
  const logOut = () => {
    localStorage.removeItem('jwt');
    setIsAdmin(false);
    navigate('/');
  };
  const goHome = () => {
    navigate('/');
  };

  const MenuURL = [
    {name: '홈', address: '/'},
    {name: '뉴스', address: '/news'},
    {name: '게임', address: '/game'},
    {name: '가이드', address: '/guide'},
    {name: '데이터베이스', address: '/database'},
  ];

  const [clicked, setClicked] = useState(false);

  const clickCheck = () => {
    setClicked(!clicked);
  };

  const containerClassName = clicked ? 'clicked' : 'unclicked';

  return (
    <>
      <Container className={containerClassName}>
        <Inner>
          <LogoContainer>{clicked ? <Main></Main> : <Logo onClick={goHome}></Logo>}</LogoContainer>
          <Nav>
            <StyledLink to="/">홈</StyledLink>
            <StyledLink to="/news">뉴스</StyledLink>
            <StyledLink to="/game">게임</StyledLink>
            <StyledLink to="/guide">가이드</StyledLink>
            <StyledLink to="/database">데이터베이스</StyledLink>
          </Nav>
        </Inner>
        {isAdmin ? (
          <LogOutBtn
            text="로그아웃"
            onClick={() => {
              logOut();
            }}
          ></LogOutBtn>
        ) : null}
        <HamburgerContainer>
          {clicked ? (
            <X
              onClick={() => {
                clickCheck();
              }}
            ></X>
          ) : (
            <Menu
              onClick={() => {
                clickCheck();
              }}
            ></Menu>
          )}
        </HamburgerContainer>
      </Container>
      <SideBar clicked={clicked} setClicked={setClicked} MenuURL={MenuURL} />
    </>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  @media screen and (max-width: 990px) {
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 20;

    &.clicked {
      background-color: #1c1c1c;
    }

    &.unclicked {
      background-color: #fff;
    }
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5rem;
  width: 1320px;
  padding: 1.5rem;
  @media screen and (max-width: 990px) {
    width: auto;
    margin: 1rem 0;
    padding: 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  @media screen and (max-width: 990px) {
    width: auto;
    margin-left: 1rem;
  }
`;

const Logo = styled(TextLogo)`
  cursor: pointer;
  height: 30px;

  path {
    fill: ${({theme}: any) => theme.color.bg100};
  }

  @media screen and (max-width: 990px) {
    width: auto;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  color: gray;
  font-size: 1rem;
  min-width: 450px;
  margin-left: 150px;

  @media screen and (max-width: 990px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  padding: 5px 20px;
  transition: all ease-in-out 0.1s;
  text-decoration: none;
  color: inherit;
  border-bottom: 2px solid transparent;

  &:hover {
    color: black;
    border-bottom: 2px solid;
    border-image: linear-gradient(to right, #68c3c4 30%, #001fa9 100%);
    border-image-slice: 1;
  }
`;

const HamburgerContainer = styled.div`
  display: none;

  @media screen and (max-width: 990px) {
    display: flex;
    width: auto;
    height: auto;
    margin-right: 1rem;
  }
`;

const Menu = styled(MenuLogo)`
  display: none;
  @media screen and (max-width: 990px) {
    display: flex;
    width: 40px;
    height: auto;
    cursor: pointer;
    fill: #68c3c4;
  }
`;

const X = styled(XLogo)`
  display: none;
  @media screen and (max-width: 990px) {
    display: flex;
    width: 40px;
    height: auto;
    cursor: pointer;
    fill: #68c3c4;
  }
`;

const Main = styled(MainLogo)`
  height: 30px;

  path {
    fill: ${({theme}: any) => theme.color.bg100};
  }

  @media screen and (max-width: 990px) {
    width: auto;
  }
`;

const LogOutBtn = styled(AdminButton)``;
