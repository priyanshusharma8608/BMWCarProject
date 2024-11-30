import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Sign from './components/Sign'
import Models from './components/Models'
import About from './components/About'
import Electric from './components/Electric'
import Configurator from './components/Configurator'
import MoreBMW from './components/MoreBMW'
import OtpVerification from './components/OtpVerification'
function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<><Home/></>} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/login' element={<Login />} />
        <Route path='/models' element={<Models />} />
        <Route path='/about' element={<About />} />
        <Route path='/configurator' element={<Configurator />} />
        <Route path='/electric' element={<Electric />} />
        <Route path='/more' element={<MoreBMW />} />
        <Route path='/OtpVerification' element={<OtpVerification />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App