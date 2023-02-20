import * as React from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
//components
import { Layout } from './components/Layout/Layout'
import { Login } from './components/Login/Login'
import { SignIn }  from './components/SignIn/SignIn'

export const App: React.FC = () => {
  return (
    <main>
        <Routes>
        <Route path='/' element={
        <div className='wrapper'>
        <Layout /> 
        <Outlet />
        </div>
        }>
            <Route path='login' element={<Login />} />
            <Route path='signin' element={<SignIn />} />
            </Route>
        </Routes>
        </main>
     
  )
}


