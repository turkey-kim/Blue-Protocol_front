import {useState} from 'react';
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg';
import ToggleMenu from './ToggleMenu';
import SubToggle from './SubToggle';

interface Props {
  url?: string;
  focus?: boolean;
}

const GuideSideBar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
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

  return (
    <Container>
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
  width: 20%;
  height: auto;
  box-sizing: border-box;
  padding: 3rem;
`;

const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: gray;
  font-size: 1.2rem;
  padding: 0.5rem;
  cursor: pointer;
`;

const SubToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
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

const ArrowIcon = styled(Arrow)<Props>`
  width: 20px;
  height: 20px;
  fill: gray;
  transform: ${props => (props.focus ? 'rotate(180deg)' : null)};
`;
