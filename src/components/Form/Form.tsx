import * as React from 'react';
//styles
import './Form.scss'
//types
type Prop = {
    headline?: string,
    button: string
}

export const Form: React.FC<Prop> = ({ headline, button }) => {
  return (
    <form>
        <h2>{headline}</h2>
        <label>
            {/* <img /> */}
            <input type="text" placeholder='Email' />
        </label>
        <label>
            {/* <img /> */}
            <input type="password" placeholder='Contraseña' />
        </label>
        <label>
            <input type="checkbox" />
            Recordar contraseña
        </label>
        <button>{button}</button>
        </form>
  )
}
