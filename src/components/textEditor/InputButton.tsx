import styled from 'styled-components';

type InputButtonProps = {
  title: string;
  onClick: () => void;
};

const InputButton = ({title, onClick}: InputButtonProps) => {
  return <Button onClick={onClick}>{title}</Button>;
};

const Button = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgray;
  font-size: 16px;
  font-weight: 700;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

export default InputButton;
