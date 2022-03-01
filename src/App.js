import './App.css'
import { useState, useEffect } from 'react'
import Event from './page/event'
import Home from './page/home'
import Login from './page/login'
import News from './page/news'
import PlayerList from './page/playerList'
import Player from './page/player'
import Rank from './page/rank'
import Result from './page/result'
import Video from './page/video'
import School from './page/school'
import SchoolList from './page/schoolList'
import HandleData from './page/handleData'

import Menu from './menu/menu'

import {

  Routes,
  Route,
} from 'react-router-dom'
import EventList from './page/eventList'
import ResultList from './page/resultList'
import handleData from './component/handleData/sideBar'


function App() {

  const [user,setUser]=useState(localStorage.getItem('user')?localStorage.getItem('user'):'')
  const [isAdministrator,setIsAdministrator]=useState(localStorage.getItem('isAdministrator')?true:false)
  return (
    <>
      <Menu 
        user={user}
        isAdministrator={isAdministrator}
        setUser={setUser}
        setIsAdministrator={setIsAdministrator}
      />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Event />} path="/event" />
        <Route element={<EventList />} path="/eventList" />
        <Route element={
          <Login 
            setUser={setUser}
            setIsAdministrator={setIsAdministrator}
          />} 
          path="/login" 
          
        />
        <Route element={<News />} path="/news" />
        <Route element={<PlayerList />} path="/playerList" />
        <Route element={<Player />} path="/player" />
        <Route element={<Rank />} path="/ranking" />
        <Route element={<ResultList />} path="/resultList" />
        <Route element={<Result />} path="/result" />
        <Route element={<Video />} path="/video" />
        <Route element={<School />} path="/school" />
        <Route element={<SchoolList />} path="/schoolList" />
        <Route element={<HandleData />} path="/handleData" />
      </Routes>
    </>
  )
  
}

export default App
