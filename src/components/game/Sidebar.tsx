import {useState} from 'react';
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg';

interface Props {
  url?: string;
  focus?: string | undefined;
  isSubmenuOpen?: boolean;
}

const SideBar = () => {
  const {id} = useParams();
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <Container>
      <Menu
        to="/game"
        url={id}
        onClick={() => {
          setOpenSubMenu(!openSubMenu);
        }}
      >
        커멘드 메뉴 <ArrowIcon isSubmenuOpen={openSubMenu} />
      </Menu>
      <SubMenuContainer isSubmenuOpen={openSubMenu}>
        <SubMenu to="/game/command/캐릭터" url={id} focus="캐릭터">
          캐릭터
        </SubMenu>
        <SubMenu to="/game/command/소지품" url={id} focus="소지품">
          소지품
        </SubMenu>
        <SubMenu to="/game/command/퀘스트" url={id} focus="퀘스트">
          퀘스트
        </SubMenu>
        <SubMenu to="/game/command/지도" url={id} focus="지도">
          지도
        </SubMenu>
        <SubMenu to="/game/command/커뮤니케이션" url={id} focus="커뮤니케이션">
          커뮤니케이션
        </SubMenu>
        <SubMenu to="/game/command/미션" url={id} focus="미션">
          미션
        </SubMenu>
        <SubMenu to="/game/command/파티" url={id} focus="파티">
          파티
        </SubMenu>
        <SubMenu to="/game/command/팀" url={id} focus="팀">
          팀
        </SubMenu>
      </SubMenuContainer>
      <Menu to="/game/전투" url={id} focus="전투">
        전투
      </Menu>
      <Menu to="/game/무기 생산 및 강화" url={id} focus="무기 생산 및 강화">
        무기 생산 및 강화
      </Menu>
      <Menu to="/game/이매진 크래프트" url={id} focus="이매진 크래프트">
        이매진 크래프트
      </Menu>
      <Menu to="/game/낚시" url={id} focus="낚시">
        낚시
      </Menu>
      <Menu to="/game/레이드 미션" url={id} focus="레이드 미션">
        레이드 미션
      </Menu>
      <Menu to="/game/스토리" url={id} focus="스토리">
        스토리
      </Menu>
      <Menu to="/game/등장인물" url={id} focus="등장인물">
        등장인물
      </Menu>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: auto;
  box-sizing: border-box;
  padding: 3rem;
`;

const Menu = styled(Link)<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => (props.focus === props.url ? 'black' : 'gray')};
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem;
  cursor: pointer;
`;

const SubMenuContainer = styled.div<Props>`
  display: ${props => (props.isSubmenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
  border-left: 1px solid gray;
`;

const SubMenu = styled(Link)<Props>`
  padding: 0.2rem 0.5rem;
  color: ${props => (props.focus === props.url ? 'black' : 'gray')};
  font-size: 1rem;
  text-decoration: none;
`;

const ArrowIcon = styled(Arrow)<Props>`
  width: 20px;
  height: 20px;
  fill: gray;
  transform: ${props => (props.isSubmenuOpen ? 'rotate(180deg)' : null)};
`;
