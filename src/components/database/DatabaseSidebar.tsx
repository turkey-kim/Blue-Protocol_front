import {useNavigate} from 'react-router';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';
import {loginState} from '../../states/atoms';
import AdminButton from '../AdminButton';
import DatabaseToggleMenu from './DatabaseToggleMenu';
import useSidebarControl from '../../hooks/useSidebarControl';

const menuList = ['클래스', '무기', '이매진', '적', '아이템'];

const DatabaseSidebar = () => {
  const isLogin = useRecoilValue(loginState);
  const {isNavOpen} = useSidebarControl();
  const navigate = useNavigate();
  return (
    <Container className={isNavOpen ? 'open' : ''}>
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
  width: 30%;
  height: auto;
  box-sizing: border-box;
  padding: 3rem;

  @media screen and (max-width: 990px) {
    display: flex;
    position: fixed;
    top: 30px;
    bottom: 0;
    flex-direction: column;
    background-color: white;
    width: 100%;
    min-height: 50rem;
    left: -100%;
    box-sizing: border-box;
    padding: 3rem;
    z-index: 3;
    transition: 0.5s ease;
    &.open {
      left: 0;
      transition: 0.5s ease;
      overflow: scroll;
    }
  }
`;
