import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Outlet } from "react-router";
import { Routes, Route } from "react-router";
import News from "./pages/News";
import Game from "./pages/Game";
import Guide from "./pages/Guide";
import Database from "./pages/Database";

function Dashboard() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="news" element={<News />}></Route>
        <Route path="game" element={<Game />}></Route>
        <Route path="guide" element={<Guide />}></Route>
        <Route path="database" element={<Database />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
