import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <main>
        <Routes>
            <Route path='/' element={<Layout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sighin' element={<SighIn />} />
        </Routes>
    </main>
  )
}
