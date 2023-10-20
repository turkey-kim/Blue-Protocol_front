import styled from 'styled-components';
import {useNavigate} from 'react-router';

interface Props {
  thumbnail: string;
  category: string;
  title: string;
  outline: string;
  date: string;
  id: number;
}
const NewsCard = ({thumbnail, category, title, outline, date, id}: Props) => {
  const navigate = useNavigate();
  return (
    <NewsContainer
      onClick={() => {
        navigate(`/news/${String(id)}`);
      }}
    >
      <NewsImage
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      ></NewsImage>
      <NewsOutlines>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Outline>{outline}</Outline>
        <Date>{date}</Date>
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
  margin: 3rem 0;
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    transition: all 0.5s ease-in;
    background: linear-gradient(
      to right,
      rgba(106, 194, 195, 0.1) 60%,
      rgba(106, 194, 195, 0.5) 80%,
      rgba(106, 194, 195, 1) 100%
    );
  }

  @media (max-width: 990px) {
    flex-direction: column;
    background-color: ghostwhite;

    &:hover {
      background: linear-gradient(
        to bottom,
        rgba(106, 194, 195, 0.1) 60%,
        rgba(106, 194, 195, 0.5) 80%,
        rgba(106, 194, 195, 1) 100%
      );
    }
  }
`;

const NewsImage = styled.div`
  border-radius: 1rem;
  width: 510px;
  min-width: 400px;
  height: 200px;
  background-size: cover;
  background-position: center;

  @media (max-width: 990px) {
    width: auto;
    min-width: 100%;
  }
`;

const NewsOutlines = styled.div`
  border-radius: 1rem;
  width: 400px;
  height: 200px;
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  @media (max-width: 990px) {
    width: 100%;
    padding: 0;

    & > * {
      padding: 0 1rem;
    }
  }
`;

const Category = styled.span`
  font-weight: 800;
  font-size: 1rem;
  color: ${({theme}) => theme.color.bg100};
`;

const Title = styled.h1`
  margin: 0.3rem 0;
  font-size: 1.8rem;
  font-weight: 800;
`;

const Outline = styled.p`
  color: ${({theme}) => theme.color.dark100};
  font-size: 1rem;
`;

const Date = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
`;
