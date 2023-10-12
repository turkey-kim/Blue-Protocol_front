import styled from 'styled-components';
import ToggleMenu from './ToggleMenu';
import SubToggle from './SubToggle';
import {loginState} from '../../states/atoms';
import {useRecoilValue} from 'recoil';
import {useNavigate} from 'react-router';
import AdminButton from '../AdminButton';

interface Props {
  url?: string;
  focus?: boolean;
}

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
  const navigate = useNavigate();

  return (
    <Container>
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
