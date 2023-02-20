import * as React from 'react';
import { NavLink , Outlet, Route } from "react-router-dom";
//styles
import './Layout.scss'
import './../../main.scss'
//images
import layoutPic from './Layout-pic.png';


export const Layout: React.FC = () => {
  return (
    <section className='layout'>
      <img src={layoutPic} alt="background"/>
        <NavLink className='login' to='/login'>Inicia sesión</NavLink >
        <NavLink className='signin' to='/signin'>¿Aún no tienes cuenta?</NavLink >
    </section>
  )
}


