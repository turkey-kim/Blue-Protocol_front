import styled from 'styled-components';
import {useNavigate} from 'react-router';
import {sliceString} from '../../utils/string';

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
        navigate(`/news/${id}`);
      }}
    >
      <NewsImage
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      ></NewsImage>
      <NewsOutlines>
        <Category>{category}</Category>
        <Title>{sliceString(title, 40)}</Title>
        <Outline>{sliceString(outline, 50)}</Outline>
        <Date>{date}</Date>
      </NewsOutlines>
    </NewsContainer>
  );
};

export default NewsCard;

const NewsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: auto;
  margin: 3rem 0;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background: linear-gradient(
      to right,
      rgba(106, 194, 195, 0.1) 60%,
      rgba(106, 194, 195, 0.5) 80%,
      rgba(106, 194, 195, 1) 100%
    );

    & > :first-child {
      transition: background-size 0.2s ease; /* 백그라운드 이미지 크기 변환을 위한 트랜지션 추가 */
      background-size: 100%; /* 백그라운드 이미지 크기를 확대 */
    }
  }

  &:not(:hover) {
    & > :first-child {
      transition: background-size 0.2s ease;
      background-size: 103%;
    }
  }

  @media (max-width: 990px) {
    flex-direction: column;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    &:hover {
      background: none;
    }
  }
`;

const NewsImage = styled.div`
  border-radius: 10px;
  width: 510px;
  min-width: 400px;
  height: 200px;
  background-position: center;

  @media (max-width: 990px) {
    width: auto;
    min-width: 95%;
    margin-top: 15px;
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
  & > * {
    margin-bottom: 12px;
  }

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
  line-height: 1.3;

  @media (max-width: 990px) {
    font-size: 1.5rem;
  }
`;

const Outline = styled.p`
  color: ${({theme}) => theme.color.dark100};
  font-size: 1rem;
`;

const Date = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
`;
