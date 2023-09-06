import styled from "styled-components";
import a from "../../assets/images/news01.png";

interface Props {
  imgUrl: string;
  category: string;
  title: string;
  content: string;
  time: string;
}
const NewsCard = ({ imgUrl, category, title, content, time }: Props) => {
  return (
    <NewsContainer>
      <NewsImage
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></NewsImage>
      <NewsOutlines>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Outline>{content}</Outline>
        <Date>{time}</Date>
      </NewsOutlines>
    </NewsContainer>
  );
};

export default NewsCard;

const NewsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 2rem 0;
  cursor: pointer;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

const NewsImage = styled.div`
  border-radius: 1rem;
  width: 510px;
  min-width: 450px;
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const NewsOutlines = styled.div`
  border-radius: 1rem;
  width: 40%;
  min-width: 450px;
  height: 200px;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

const Category = styled.span`
  font-weight: 800;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.bg100};
`;

const Title = styled.h1`
  margin: 0.3rem 0;
  font-size: 1.8rem;
  font-weight: 800;
`;

const Outline = styled.p`
  color: ${({ theme }) => theme.color.dark100};
  font-size: 1rem;
`;

const Date = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
`;
