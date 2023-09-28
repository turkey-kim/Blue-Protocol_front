import styled from 'styled-components';
interface Props {
  imgUrl: string;
  category: string;
  title: string;
  content: string;
  time: string;
}
const NewsCarousel = ({ imgUrl, category, title, content, time }: Props) => {
  return (
    <CarouselContainer>
      <CarouselImage
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></CarouselImage>
    </CarouselContainer>
  );
};

export default NewsCarousel;

const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

const CarouselImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;
