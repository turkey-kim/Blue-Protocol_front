import './App.css';
import './font.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import { Routes, Route } from 'react-router';
import { MyGlobalStyle, myTheme } from './style';
import { ThemeProvider } from 'styled-components';
import News from './pages/News';
import Game from './pages/Game';
import Guide from './pages/Guide';
import Database from './pages/Database';
import { useEffect } from 'react';
import Login from './pages/Login';
import { checkToken } from './api/auth';
import { useRecoilState } from 'recoil';
import { loginState } from './states/atoms';

const arr = [
  {
    img: '/images/news01.png',
    category: '캐릭터',
    title: '엄청난 소식!',
    content: '에린제의 호위기사 티라스가 어쩌고 저쩌고',
    time: '12시간 전',
  },

  {
    img: '/images/news02.png',
    category: '캐릭터',
    title: '멋진 소식',
    content: '의문의 방랑자 멜로프, 멜로프 멜로프 멜로프!',
    time: '하루 전',
  },
  {
    img: '/images/news03.png',
    category: '캐릭터',
    title: '엄청난 소식!',
    content: '미래에서 온 예린제! 예린제!',
    time: '12시간 전',
  },
];

function Dashboard() {
  useEffect(() => {
    localStorage.setItem('news', JSON.stringify(arr));
  }, []);
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

function App() {
  let [admin, setAdmin] = useRecoilState(loginState);

  useEffect(() => {
    async function adminVerify() {
      let result = await checkToken();
      if (result == true) {
        setAdmin(true);
        console.log('관리자 로그인 상태입니다');
      } else {
        setAdmin(false);
      }
    }
    adminVerify();
  }, []);

  return (
    <>
      <MyGlobalStyle theme={myTheme} />
      <ThemeProvider theme={myTheme}>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />}></Route>
            <Route path="news" element={<News />}></Route>
            <Route path="game" element={<Game />}></Route>
            <Route path="guide" element={<Guide />}></Route>
            <Route path="database" element={<Database />}></Route>
            <Route path="admin/login" element={<Login></Login>}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
