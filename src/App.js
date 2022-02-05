import './App.css'
import { useState, useEffect } from 'react'
import { Button, message } from 'antd'
import Event from './page/event'
import Home from './page/home'
import Login from './page/login'
import News from './page/news'
import PlayerList from './page/playerList'
import Player from './page/player'
import Rank from './page/rank'
import Result from './page/result'
import Video from './page/video'

import Menu from './menu/menu'
import styled from 'styled-components'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom'


function App() {

  const [isLogin,setIsLogin]=useState(true)
  const [user,setUser]=useState('')

  return (
    <>
      <Menu 
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        user={user}
        setUser={setUser}
      />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Event />} path="/event" />
        <Route element={<Login />} path="/login" />
        <Route element={<News />} path="/news" />
        <Route element={<PlayerList />} path="/playerList" />
        <Route element={<Player />} path="/player" />
        <Route element={<Rank />} path="/ranking" />
        <Route element={<Result />} path="/result" />
        <Route element={<Video />} path="/video" />
      </Routes>
    </>
  )
  
}

export default App
