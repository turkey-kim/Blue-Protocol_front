import {ReactComponent as ToTop} from '../assets/icons/topIcon.svg';
import styled from 'styled-components';

const TopScrollButton = () => {
  const toTop = () => {
    window.scroll(0, 0);
  };

  return (
    <>
      <Button
        onClick={() => {
          toTop();
        }}
      ></Button>
    </>
  );
};

export default TopScrollButton;

const Button = styled(ToTop)`
  position: fixed;
  width: 60px;
  height: 60px;
  right: 50px;
  bottom: 50px;
  cursor: pointer;

  @media screen and (max-width: 990px) {
    width: 45px;
    height: 45px;
    bottom: 30px;
    right: 10px;
  }
`;
