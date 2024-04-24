import styled from 'styled-components';
interface Props {
  active?: any;
  length?: any;
  curr?: number;
  onDotClick?: (currentIndex: number, intervalCheck: number) => void;
  intervalCheck?: any;
}
const CreateDots = ({length, curr, onDotClick, intervalCheck}: Props) => {
  const dots = [];

  for (let i = 0; i < length; i++) {
    const isActive = i === curr;

    dots.push(
      <DotsContainer key={i}>
        <Dot
          active={isActive}
          onClick={() => {
            onDotClick?.(i, intervalCheck + 1);
          }}
        />
      </DotsContainer>,
    );
  }

  return <Dots>{dots}</Dots>;
};

export default CreateDots;

const Dots = styled.div`
  position: absolute;
  bottom: -50px;
  display: flex;

  @media screen and (max-width: 990px) {
    bottom: -25px;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  margin-right: 1vw;
  @media screen and (max-width: 990px) {
    margin-left: 2vw;
    margin-right: 2vw;
  }
`;

const Dot = styled.div<Props>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  cursor: pointer;
  background-color: ${props => (props.active ? '#FFFFFF' : 'transparent')};
`;
