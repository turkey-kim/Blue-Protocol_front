import styled from 'styled-components';
import {useEffect} from 'react';
import {getGuideData} from '../api';
import {guideData} from '../states/atoms';
import {useRecoilState} from 'recoil';
import Intro from '../components/Intro';
import {ReactComponent as DiaIcon} from '../assets/icons/borderIcon.svg';
import GuideSideBar from '../components/guide/GuideSidebar';
import GuideContent from '../components/guide/GuideContent';
import TopScrollButton from '../components/TopScrollButton';
import OpenMobileNav from '../components/OpenMobileNav';
import {isMobileNavOpen} from '../states/atoms';

const Guide = () => {
  const [textData, setTextData] = useRecoilState(guideData);
  const [isNavOpen, setIsNavOpen] = useRecoilState(isMobileNavOpen);

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
      <OpenMobileNav
        isOpen={isNavOpen}
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
      />
      <TopScrollButton />
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

  @media screen and (max-width: 990px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1280px;
  width: 85%;
  height: auto;
  min-height: 70vh;
  margin-bottom: 200px;

  @media screen and (max-width: 990px) {
    margin-top: 50px;
  }
`;
