import {useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg';
import {Link} from 'react-router-dom';

interface Props {
  url?: string;
  focus?: boolean;
}

const ToggleMenu = ({title}: {title: string}) => {
  const [openToggle, setOpenToggle] = useState(false);
  return (
    <Container>
      <Wrapper
        onClick={() => {
          setOpenToggle(!openToggle);
        }}
      >
        {title} <ArrowIcon focus={openToggle} />
      </Wrapper>
      {openToggle ? (
        <InnerContaianer>
          <Submenu to="/">가</Submenu>
          <Submenu to="/">나</Submenu>
          <Submenu to="/">디</Submenu>
          <Submenu to="/">ㄹ</Submenu>
        </InnerContaianer>
      ) : null}
    </Container>
  );
};

export default ToggleMenu;

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

const InnerContaianer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Submenu = styled(Link)`
  margin-left: 1rem;
  padding: 0.2rem 0.5rem;
  border-left: 1px solid gray;
  color: gray;
  font-size: 1rem;
  text-decoration: none;
`;
