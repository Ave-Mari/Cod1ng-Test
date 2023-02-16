import React from 'react';
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <section>
        <Link to='/login'>Inicia sesión</Link>
        <Link to='/sighin'>¿Aún no tienes cuenta?</Link>
    </section>
  )
}
