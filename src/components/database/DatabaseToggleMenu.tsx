import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg';
import {useParams} from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import {databaseData} from '../../states/atoms';

interface Props {
  focus?: boolean;
}
const DatabaseToggleMenu = ({title}: {title: string}) => {
  const {id} = useParams();
  const [openToggle, setOpenToggle] = useState(false);
  const data = useRecoilValue(databaseData);
  const isFocused = (contentTitle: string): boolean => {
    if (id === contentTitle) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Container>
      <Wrapper
        onClick={() => {
          setOpenToggle(!openToggle);
        }}
      >
        {title} <ArrowIcon focus={openToggle} />
      </Wrapper>
      <InnerContaianer focus={openToggle}>
        {data.map(element =>
          element.category === title ? (
            <Submenu to={`/database/${element.title}`} focus={isFocused(element.title)}>
              {element.title}
            </Submenu>
          ) : null,
        )}
      </InnerContaianer>
    </Container>
  );
};

export default DatabaseToggleMenu;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: gray;
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

const InnerContaianer = styled.div<Props>`
  display: ${props => (props.focus ? 'flex' : 'none')};
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Submenu = styled(Link)<Props>`
  margin-left: 1rem;
  padding: 0.2rem 0.5rem;
  border-left: 1px solid gray;
  color: ${props => (props.focus ? 'black' : 'gray')};
  font-size: 1rem;
  text-decoration: none;
`;
