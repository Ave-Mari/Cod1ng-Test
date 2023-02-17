import * as React from 'react'
import {Form} from './../Form/Form'
//styles
import './Login.scss'

export const Login: React.FC = () => {
  return (
    <section className='login-section'>
      <Form 
        headline='Inicia sesión'
        button="Iniciar sesión"
        link="Olvidé mi contraseña"

    />
      </section>
  )
}

