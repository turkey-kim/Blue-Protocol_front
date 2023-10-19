import './App.css';
import './font.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import {Outlet} from 'react-router';
import {Routes, Route} from 'react-router';
import {MyGlobalStyle, myTheme} from './style';
import {ThemeProvider} from 'styled-components';
import News from './pages/News';
import Game from './pages/Game';
import Guide from './pages/Guide';
import Database from './pages/Database';
import NewsDetail from './pages/NewsDetail';
import EditNews from './pages/EditNews';
import EditGuide from './pages/EditGuide';
import {useEffect} from 'react';
import Login from './pages/Login';
import {checkToken} from './api/auth';
import {useRecoilState} from 'recoil';
import {loginState} from './states/atoms';
import PrivateRoute from './routes/PrivateRoute';
import PostNews from './pages/PostNews';
import PostGuides from './pages/PostGuides';
import PostDatabase from './pages/PostDatabase';
import EditDatabase from './pages/EditDatabase';

function Dashboard() {
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
            <Route path="news/:id" element={<NewsDetail />}></Route>
            <Route path="game" element={<Game />}>
              <Route path=":id" element={<Game />} />
              <Route path="command/:id" element={<Game />} />
            </Route>
            <Route path="guide" element={<Guide />}>
              <Route path=":id" element={<Guide />}></Route>
            </Route>
            <Route path="database" element={<Database />}>
              <Route path=":id" element={<Database />}></Route>
            </Route>
            <Route path="admin/login" element={<Login></Login>}></Route>
            <Route
              path="news/post"
              element={
                <PrivateRoute>
                  <PostNews />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="news/edit/:id"
              element={
                <PrivateRoute>
                  <EditNews />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="guide/post"
              element={
                <PrivateRoute>
                  <PostGuides />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="guide/edit/:id"
              element={
                <PrivateRoute>
                  <EditGuide />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="database/post"
              element={
                <PrivateRoute>
                  <PostDatabase />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="database/edit/:id"
              element={
                <PrivateRoute>
                  <EditDatabase />
                </PrivateRoute>
              }
            ></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
