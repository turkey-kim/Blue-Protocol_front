import {useState} from 'react';
import styled from 'styled-components';
import {postLastNewsIndex} from '../../api';
import {allNewsState} from '../../states/atoms';
import {useRecoilState} from 'recoil';
import {useNavigate} from 'react-router';
import {sliceString} from '../../utils/string';
import NewsCard from '../home/NewsCard';

const NewsList = () => {
  const [allNews, setAllNews] = useRecoilState(allNewsState) as any[];
  const [len, setLen] = useState(allNews.length);
  const [check, setCheck] = useState(true);
  async function getMoreNews() {
    let index = allNews[allNews.length - 1].id;
    const arr = await postLastNewsIndex(index);
    const newLen = len + arr.length;
    setAllNews(allNews.concat(arr));
    if (newLen === len) {
      setCheck(false);
    } else {
      setCheck(true);
    }

    setLen(newLen);
  }

  return (
    <>
      <NewsContainer>
        {allNews.length
          ? allNews.map((element: any, key: number) => (
              <NewsCard
                key={element.thumbnail}
                thumbnail={element.thumbnail}
                category={element.category}
                title={element.title}
                outline={element.outline}
                date={element.date}
                id={element.id}
                pathname="news"
              />
            ))
          : null}
      </NewsContainer>
      {check ? (
        <BtnContainer>
          <MoreBtn onClick={getMoreNews}>더보기</MoreBtn>
        </BtnContainer>
      ) : null}
    </>
  );
};

export default NewsList;

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 70%;
  margin: 10vh 0;
  /* border-right: 2px solid;
  border-image: linear-gradient(to bottom, #68c3c4 0%, #001fa9 99.49%);
  border-image-slice: 1; */

  @media screen and (max-width: 990px) {
    border: none;
    margin: 10vh 15vw 10vh 15vw;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15vh;
`;

const MoreBtn = styled.button`
  width: 300px;
  height: 60px;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(90deg, rgba(104, 195, 196, 0.5) 0%, rgba(0, 31, 169, 0.5) 100%);
  border: none;
  cursor: pointer;
  &:hover {
    background: linear-gradient(90deg, #68c3c4 0%, #001fa9 100%);
  }
  @media screen and (max-width: 990px) {
    width: 150px;
    height: 40px;
    font-size: 12px;
  }
`;
