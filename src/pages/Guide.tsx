import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {getGuideData} from '../api';
import {guideData} from '../states/atoms';
import {useRecoilState} from 'recoil';
import Intro from '../components/Intro';
import {ReactComponent as DiaIcon} from '../assets/icons/borderIcon.svg';
import GuideSideBar from '../components/guide/GuideSidebar';
import GuideContent from '../components/guide/GuideContent';

const Guide = () => {
  const [textData, setTextData] = useRecoilState(guideData);

  useEffect(() => {
    const fetchData = async () => {
      if (!textData.length) {
        setTextData(await getGuideData());
        console.log(textData);
        console.log('전송');
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Intro />
      <DiaBorderIcon />
      <ContentWrapper>
        <GuideSideBar />
        <GuideContent />
      </ContentWrapper>
    </Container>
  );
};

export default Guide;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
`;

const DiaBorderIcon = styled(DiaIcon)`
  padding: 3rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1280px;
  width: 85%;
  height: auto;
  min-height: 70vh;
`;
