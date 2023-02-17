import * as React from 'react';
//styles
import './Form.scss'
//images
import logo from './logo.svg';
//types
type Prop = {
    headline: string,
    button: string,
    link: string
}

export const Form: React.FC<Prop> = ({ headline, button, link }) => {
  return (
    <form>
        <img src={logo} alt="subastatucasa logo" />
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
        <a href="#">{link}</a>
        </form>
  )
}
