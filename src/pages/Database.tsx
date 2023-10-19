import styled from 'styled-components';
import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {databaseData} from '../states/atoms';
import {getDatabaseData} from '../api';
import Intro from '../components/Intro';
import {ReactComponent as DiaIcon} from '../assets/icons/borderIcon.svg';
import DatabaseSidebar from '../components/database/DatabaseSidebar';
import DatabaseContent from '../components/database/DatabaseContent';

const Database = () => {
  const [textData, setTextData] = useRecoilState(databaseData);

  useEffect(() => {
    const fetchData = async () => {
      if (textData.length === 0) {
        const res = await getDatabaseData();
        setTextData(res);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Intro />
      <DiaBorderIcon />
      <ContentWrapper>
        <DatabaseSidebar />
        <DatabaseContent />
      </ContentWrapper>
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
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1280px;
  width: 85%;
  height: auto;
  min-height: 70vh;
`;
