import { Link, useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { ReactComponent as TextLogo } from "../assets/icons/text-logo.svg";
import { publicPath } from "../constant";

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <Container>
      <Inner>
        <Logo onClick={goHome}></Logo>
        <Nav>
          <StyledLink to="/">홈</StyledLink>
          <StyledLink to="/news">뉴스</StyledLink>
          <StyledLink to="/game">게임</StyledLink>
          <StyledLink to="/guide">가이드</StyledLink>
          <StyledLink to="/database">데이터베이스</StyledLink>
        </Nav>
        <Search
          style={{
            backgroundImage: `url(${publicPath}/icons/search.png)`,
          }}
          spellCheck="false"
          placeholder="SEARCH"
        ></Search>
      </Inner>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 5rem;
  width: 1320px;
  padding: 1.5rem;
  @media screen and (max-width: 990px) {
    width: 80%;
  }
`;

const Logo = styled(TextLogo)`
  cursor: pointer;
  height: 30px;

  path {
    fill: ${({ theme }) => theme.color.bg100};
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  color: gray;
  font-size: 1rem;
  margin: 0 1rem;

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

const Search = styled.input`
  opacity: 0.6;
  background-color: #68c3c4;
  outline: none;
  border: none;
  border-radius: 2rem;
  width: 40px;
  height: 40px;
  transition: all 1s;
  cursor: pointer;
  color: transparent;
  font-weight: 700;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  margin-left: 200px;
  text-align: center;
  &::placeholder {
    color: transparent;
  }

  &:focus {
    width: 290px;
    background-position: 5%;
    color: white;
    margin: 0;
    padding: 0 3rem;
    &::placeholder {
      color: white;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 990px) {
    display: none;
  }
`;
