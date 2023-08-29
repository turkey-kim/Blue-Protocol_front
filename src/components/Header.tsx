import { Link, useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");
  };
  return (
    <Container>
      <Inner>
        <Logo
          src={process.env.PUBLIC_URL + "/icons/blue-protocol.png"}
          onClick={goHome}
        ></Logo>
        <Nav>
          <Link to="/home">HOME</Link>
          <Link to="/news">NEWS</Link>
          <Link to="/game">GAME</Link>
          <Link to="/guide">GUIDE</Link>
          <Link to="/database">DATABASE</Link>
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

const Logo = styled.img`
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.07);
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  color: gray;
  font-size: 1rem;
  margin: 0 1rem;

  a {
    cursor: pointer;
    padding: 0 1rem;
    transition: all 0.5s;
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    color: #68c3c4;
  }
`;

const Search = styled.input`
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

  &:focus {
    width: 290px;
    background-position: 5%;
    color: white;
    margin: 0;
    padding: 0 3rem;
  }
`;
