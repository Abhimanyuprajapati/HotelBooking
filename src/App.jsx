import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/navbar"
import { Home } from "./container/home"
import { HotelDetail } from "./container/hoteldetail"
import { Login } from "./container/login"

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="home" element={<Home/>}/>
          <Route path="hoteldetail/:slug" element={<HotelDetail/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
