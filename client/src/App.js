import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Configurator from "./components/Configurator"
import Electric from "./components/Electric"
import Models from "./components/Models"
import MoreBMW from "./components/MoreBMW"
import VisitOnlineShop from "./components/VisitOnlineShop"
import Home from './components/Home'
import ShowCar from './components/ShowCar';
import Profile from './components/Profile'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Home/></>} />
          <Route path="/Configurator" element={<Configurator />} />
          <Route path="/Electric" element={<Electric />} />
          <Route path="/MoreBMW" element={<MoreBMW />} />
          <Route path="/Models" element={<Models />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/VisitOnlineShop" element={<VisitOnlineShop />} />
          <Route path="/ShowCar/:id" element={<ShowCar />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App