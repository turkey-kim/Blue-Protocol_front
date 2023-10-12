import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text?: string;
  onClick?: any;
  position?: string;
}

function AdminButton({text, onClick, position}: ButtonProps) {
  return (
    <Button onClick={onClick} position={position}>
      {text}
    </Button>
  );
}

export default AdminButton;

const Button = styled.button<ButtonProps>`
  position: ${props => (props.position === 'fixed' ? 'fixed' : null)};
  max-width: 200px;
  margin: 1rem;
  padding: 0.8rem 1rem;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  background-color: #68c3c4;
  border: none;
  border-radius: 10px;
  z-index: 500;

  &:hover {
    transition: all ease 0.3s;
    color: black;
    background-color: lightgray;
  }
`;
