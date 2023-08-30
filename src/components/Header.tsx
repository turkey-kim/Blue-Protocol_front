import { Link, useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../assets/icons/blue-protocol.svg";

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");
  };
  return (
    <Container>
      <Inner>
        <Logo onClick={goHome}></Logo>
        <Nav>
          <StyledLink to="/home">HOME</StyledLink>
          <StyledLink to="/news">NEWS</StyledLink>
          <StyledLink to="/game">GAME</StyledLink>
          <StyledLink to="/guide">GUIDE</StyledLink>
          <StyledLink to="/database">DATABASE</StyledLink>
        </Nav>
        <Search
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/icons/search.png)`,
          }}
          spellCheck="false"
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
`;

const Logo = styled(LogoIcon)`
  cursor: pointer;
  transition: all 0.5s;
  path {
    fill: #68c3c4;
    transition: fill 0.5s;
  }

  &:hover {
    transform: scale(1.02);
    path {
      transition: fill 0.5s;
      fill: url(#paint0_linear_143_128);
    }
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  color: gray;
  font-size: 1rem;
  margin: 0 1rem;
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

  &:focus {
    width: 290px;
    background-position: 5%;
    color: white;
    margin: 0;
    padding: 0 3rem;
  }
`;
