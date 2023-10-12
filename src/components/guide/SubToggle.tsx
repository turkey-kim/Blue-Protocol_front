import styled from 'styled-components';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg';
import {guideData} from '../../states/atoms';
import {useRecoilValue} from 'recoil';

interface Props {
  focus?: boolean;
}

const SubToggle = ({title}: {title: string}) => {
  const {id} = useParams();
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const data = useRecoilValue(guideData);

  const isFocused = (contentTitle: string): boolean => {
    if (id === contentTitle) {
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
        {data.map(element =>
          element?.category === title ? (
            <SubMenu to={`/guide/${element.title}`} focus={isFocused(element.title)}>
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
`;

const ArrowIcon = styled(Arrow)<Props>`
  width: 20px;
  height: 20px;
  fill: gray;
  transform: ${props => (props.focus ? 'rotate(180deg)' : null)};
`;
