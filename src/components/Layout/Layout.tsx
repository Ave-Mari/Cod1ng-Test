import * as React from 'react';
import { Link, Outlet } from "react-router-dom";
//styles
import './Layout.scss'

export const Layout: React.FC = () => {
  return (
    <section>
        <Link to='/login'>Inicia sesión</Link>
        <Link to='/sighin'>¿Aún no tienes cuenta?</Link>
    </section>
  )
}

