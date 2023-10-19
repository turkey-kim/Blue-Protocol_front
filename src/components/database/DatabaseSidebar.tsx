import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';
import {loginState} from '../../states/atoms';
import AdminButton from '../AdminButton';
import DatabaseToggleMenu from './DatabaseToggleMenu';

const menuList = ['클래스', '무기', '이매진', '적', '아이템'];
interface Props {
  url?: string;
  focus?: string | undefined;
  isSubmenuOpen?: boolean;
}
const DatabaseSidebar = () => {
  const isLogin = useRecoilValue(loginState);
  const navigate = useNavigate();
  return (
    <Container>
      {isLogin ? (
        <AdminButton
          text="새로운 글 작성"
          onClick={() => {
            navigate('/database/post');
          }}
        />
      ) : null}
      {menuList.map(element => (
        <DatabaseToggleMenu title={element}></DatabaseToggleMenu>
      ))}
    </Container>
  );
};

export default DatabaseSidebar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 20%;
  height: auto;
  box-sizing: border-box;
  padding: 3rem;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gray;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem;
  cursor: pointer;
`;
