import styled from 'styled-components';
import {useState} from 'react';
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg';

interface Props {
  url?: string;
  focus?: boolean;
}

const SubToggle = ({title}: {title: string}) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
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
        <SubMenu>1</SubMenu>
        <SubMenu>1</SubMenu>
        <SubMenu>1</SubMenu>
        <SubMenu>1</SubMenu>
        <SubMenu>1</SubMenu>
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
  margin-bottom: 1rem;
`;

const SubMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: gray;
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
