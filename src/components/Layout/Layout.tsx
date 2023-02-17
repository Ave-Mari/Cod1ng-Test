import * as React from 'react';
import { Link, Outlet } from "react-router-dom";
//styles
import './Layout.scss'
import './../../main.scss'
//images
import layoutPic from './Layout-pic.png';


export const Layout: React.FC = () => {
  return (
    <section className='layout'>
      <img src={layoutPic} alt="background"/>
        <Link className='login' to='/login'>Inicia sesión</Link>
        <Link className='signin' to='/signin'>¿Aún no tienes cuenta?</Link>
    </section>
  )
}

