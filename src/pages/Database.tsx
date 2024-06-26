import styled from 'styled-components';
import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {databaseList, isMobileNavOpen} from '../states/atoms';
import {getDatabaseList} from '../api';
import Intro from '../components/Intro';
import {ReactComponent as DiaIcon} from '../assets/icons/borderIcon.svg';
import DatabaseSidebar from '../components/database/DatabaseSidebar';
import DatabaseContent from '../components/database/DatabaseContent';
import OpenMobileNav from '../components/OpenMobileNav';
import TopScrollButton from '../components/TopScrollButton';
import TextStartPoint from '../components/TextStartPoint';

const Database = () => {
  const [list, setList] = useRecoilState(databaseList);
  const [isNavOpen, setIsNavOpen] = useRecoilState(isMobileNavOpen);
  useEffect(() => {
    const fetchData = async () => {
      if (list.length === 0) {
        const res = await getDatabaseList();
        setList(res);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Intro />
      <TextStartPoint />
      <DiaBorderIcon />
      <ContentWrapper>
        <DatabaseSidebar />
        <DatabaseContent />
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

export default Database;

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
