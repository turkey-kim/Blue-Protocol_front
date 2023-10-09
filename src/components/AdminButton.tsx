import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onClick: any;
}

function AdminButton({text, onClick}: ButtonProps) {
  return <Button onClick={onClick}>{text}</Button>;
}

export default AdminButton;

const Button = styled.button`
  margin: 1rem;
  padding: 1rem;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  background-color: black;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: gray;
  }
`;
