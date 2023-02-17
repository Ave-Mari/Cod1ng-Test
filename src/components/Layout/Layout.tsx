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
        <NavLink activeStyle={{ color: "blue" }} className='login' to='/login'>Inicia sesión</NavLink >
        <NavLink activeStyle={{ color: "blue" }} className='signin' to='/signin'>¿Aún no tienes cuenta?</NavLink >
    </section>
  )
}

'https://reactrouter.com/en/main/components/nav-link'

