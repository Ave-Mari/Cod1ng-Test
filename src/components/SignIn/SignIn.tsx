import * as React from 'react'
import {Form} from './../Form/Form'
//styles
import './SignIn.scss';

export const SignIn: React.FC = () => {
  return (
    <section className='signin-section'>
      <Form 
        headline='Crea tu cuenta'
        button="Crear cuenta"
        link="Iniciar sesión"
    />
    </section>
  )
}

