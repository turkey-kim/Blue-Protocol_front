import React from 'react';
import styled from 'styled-components';
interface Props {
  active?: any;
  length?: any;
  curr?: number;
  onDotClick?: (currentIndex: number, intervalcheck: number) => void;
  intervalcheck?: any;
}
const CreateDots = ({length, curr, onDotClick, intervalcheck}: Props) => {
  const dots = [];

  for (let i = 0; i < length; i++) {
    const isActive = i === curr;

    dots.push(
      <DotsContainer key={i}>
        <Dot
          active={isActive}
          onClick={() => {
            onDotClick?.(i, intervalcheck + 1);
          }}
        />
      </DotsContainer>,
    );
  }

  return <Dots>{dots}</Dots>;
};

export default CreateDots;

const Dots = styled.div`
  display: flex;
`;

const DotsContainer = styled.div`
  display: flex;
  margin-right: 1vw;
`;

const Dot = styled.div<Props>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  cursor: pointer;
  background-color: ${props => (props.active ? '#FFFFFF' : 'transparent')};
`;
