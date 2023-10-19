import styled from 'styled-components';
import ToggleMenu from './ToggleMenu';
import SubToggle from './SubToggle';
import {loginState} from '../../states/atoms';
import {useRecoilValue} from 'recoil';
import {useNavigate} from 'react-router';
import AdminButton from '../AdminButton';
import {isMobileNavOpen} from '../../states/atoms';

const menuList = [
  '1장',
  '2장',
  '3장',
  '모험랭크',
  '클래스 퀘스트',
  '히든 퀘스트',
  '50레벨제 무기 입수',
  '추가 조사 미션',
  '서브퀘스트',
  '팁',
];

const mainQuestList = ['1장', '2장', '3장'];

const GuideSideBar = () => {
  const isAdmin = useRecoilValue(loginState);
  const isNavOpen = useRecoilValue(isMobileNavOpen);
  const navigate = useNavigate();

  return (
    <Container className={isNavOpen ? 'open' : ''}>
      {isAdmin ? (
        <AdminButton
          text="새로운 글 작성"
          onClick={() => {
            navigate('/guide/post');
          }}
        />
      ) : null}
      <Menu>퀘스트</Menu>
      {mainQuestList.map(element => (
        <SubToggle title={element}></SubToggle>
      ))}
      {menuList.map(element =>
        !mainQuestList.includes(element) ? (
          <>
            <ToggleMenu title={element}></ToggleMenu>
          </>
        ) : null,
      )}
    </Container>
  );
};

export default GuideSideBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 20%;
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
    min-height: 100vh;
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

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gray;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem;
  cursor: pointer;

  @media screen and (max-width: 990px) {
    font-size: 1rem;
  }
`;
