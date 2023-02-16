import * as React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
//components
import { Layout } from './components/Layout/Layout'
import { Login } from './components/Login/Login'
import { SighIn }  from './components/SighIn/SighIn'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sighin' element={<SighIn />} />
        </Routes>
    </BrowserRouter>
  )
}


