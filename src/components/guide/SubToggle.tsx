import styled from 'styled-components';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg';
import {guideList} from '../../states/atoms';
import {useRecoilValue, useRecoilState} from 'recoil';
import {isMobileNavOpen} from '../../states/atoms';

interface Props {
  focus?: boolean;
  title?: string;
  isOpen?: boolean;
  setIsOpen?: any;
}

const SubToggle = ({title}: Props) => {
  const {id} = useParams();
  const [menuId, setMenuId] = useState(id);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useRecoilState(isMobileNavOpen);
  const list = useRecoilValue(guideList);

  useEffect(() => {
    setMenuId(id);
  }, [id]);

  const isFocused = (contentTitle: string): boolean => {
    if (!menuId) {
      setMenuId(list[0].title);
    }
    if (menuId === contentTitle) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Container>
      <SubToggleMenu
        onClick={() => {
          setIsToggleOpen(!isToggleOpen);
        }}
      >
        {title}
        <ArrowIcon focus={isToggleOpen} />
      </SubToggleMenu>
      <InnerContaianer focus={isToggleOpen}>
        {list.map(element =>
          element?.category === title ? (
            <SubMenu
              to={`/guide/${element.title}`}
              focus={isFocused(element.title)}
              onClick={() => setIsNavOpen(false)}
            >
              {element?.title}
            </SubMenu>
          ) : null,
        )}
      </InnerContaianer>
    </Container>
  );
};

export default SubToggle;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubToggleMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: gray;
  font-size: 1.2rem;
  margin-left: 1rem;
  padding: 0.5rem;
  border-left: 1px solid gray;
  cursor: pointer;

  @media screen and (max-width: 990px) {
    font-size: 1rem;
  }
`;

const InnerContaianer = styled.div<Props>`
  display: ${props => (props.focus ? 'flex' : 'none')};
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

const SubMenu = styled(Link)<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${props => (props.focus ? 'black' : 'gray')};
  font-size: 1rem;
  margin-left: 2rem;
  padding: 0.5rem;
  border-left: 1px solid gray;
  cursor: pointer;

  @media screen and (max-width: 990px) {
    font-size: 0.8rem;
  }
`;

const ArrowIcon = styled(Arrow)<Props>`
  width: 20px;
  height: 20px;
  fill: gray;
  transform: ${props => (props.focus ? 'rotate(180deg)' : null)};
`;
