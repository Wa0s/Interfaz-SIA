import { useState } from 'react'
import jinis from './assets/images.png'
import viteLogo from '/vite.svg'
import SideBar from './SideBar'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import PrivateRoute from './pages/components/PrivateRoute'
import { Home } from './pages/home/Home'
// import LoginPage from './pages/Authentication/DocenteLoginPage'
import Layout from './pages/layout/Layout'
import { QR } from './pages/qr/QR'
import Ponentes from './pages/ponentes/Ponentes';
import Bloques from './pages/bloques/Bloques'
import { Profile } from './pages/asistencia/Profile'
// import { Home } from "./pages/Home"
// import LoginPage from "./pages/Authentication/LoginPage"
// import RegisterPage from "./pages/Authentication/RegisterPage"
// import LandingPage from "./pages/Authentication/LandingPage"
// import Layout from "./layout/Layout"
// import Cursos from "./pages/Cursos/Cursos"
// import {Consolidado} from "./pages/consolidado/Consolidado"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route element={<PrivateRoute/>}>
            {/* <Route index element={<Home/>} /> */}
            <Route path='/asistencia' element={<SideBar />} />
            <Route path='/qr' element={<QR />} />
            <Route path="/ponentes" element={<Ponentes />} />
            <Route path="/bloques" element={<Bloques />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path='/consolidado' element={<Consolidado/>} /> */}
            {/* <Route path='product/:name' element={<SoloProduct/>} />
            <Route path='cart/' element={<Order/>} />
            <Route path='foo/' element={<Foo/>} /> */}
          </Route>

          {/* <Route path='admin' element={<AdminRoute/>}>
            <Route index element={<AdminPage/>} />
          </Route> */}

          {/* <Route path='/login' element={<LoginPage />} /> */}
          {/* <Route path='/register' element={<RegisterPage />} /> */}
          {/* <Route path='/registerdocente' element={<DocenteRegisterPage />} /> */}
          <Route index element={<Home />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
