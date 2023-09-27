import styled from "styled-components";
import { publicPath } from "../../constant";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
import { ReactComponent as BoundaryIcon } from "../../assets/icons/boundary.svg";
import { ReactComponent as DotIcon } from "../../assets/icons/dot.svg";
import { useNavigate } from "react-router";

const Section_news = () => {
  let [arr, setArr] = useState<any>([{}]);
  let navigate = useNavigate();

  const goToNews = () => {
    navigate("/news");
  };

  useEffect(() => {
    const news = JSON.parse(localStorage.getItem("news") || "");
    setArr(news);
  }, []);
  return (
    <Container>
      <InnerContainer>
        <Header>NEWS</Header>
        {arr.length
          ? arr.map((element: any, index: number) => (
              <NewsCard
                key={element.title}
                imgUrl={element.img}
                category={element.category}
                title={element.title}
                content={element.content}
                time={element.time}
              ></NewsCard>
            ))
          : null}
        <GoToNews>
          <Boundary></Boundary>
          <Dot></Dot>
          <Button onClick={goToNews}>더 많은 소식 보러가기</Button>
          <Dot></Dot>
          <Boundary style={{ transform: "rotate(180deg)" }}></Boundary>
        </GoToNews>
      </InnerContainer>
    </Container>
  );
};

export default Section_news;

const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 5rem 0;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #b2dfe1 25%, #8193d5 100%);
  position: relative;
  color: white;
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 3rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 30px solid transparent;
    border-left: 40px solid white;
    width: 179px;
    height: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-top: 30px solid transparent;
    border-right: 40px solid white;
    width: 42px;
    height: 0;
  }
`;

const NewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: auto;

  margin: 2rem 0;
`;

const NewsImage = styled.div`
  border-radius: 1rem;
  width: 40%;
  min-width: 450px;
  height: 200px;
  background: url(${publicPath}/images/news01.png);
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

const GoToNews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;

const Button = styled.span`
  width: 156px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
`;

const Boundary = styled(BoundaryIcon)``;
const Dot = styled(DotIcon)`
  margin: 0.5rem;
`;
