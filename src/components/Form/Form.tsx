import * as React from 'react';
//styles
import './Form.scss'
//images
import logo from './logo.svg';
import mail from './mail.svg';
import lock from './lock.svg';
//types
type Prop = {
    headline: string,
    button: string,
    link: string
}

export const Form: React.FC<Prop> = ({ headline, button, link }) => {
  return (
    <form>
        <img src={logo} alt="subastatucasa logo" className='page-logo'/>
        <h1>{headline}</h1>
        <label className='text-input'>
            <img src={mail} className='mail-svg'/>
            <input type="text" placeholder='Email' />
        </label>
        <label className='text-input'>
            <img src={lock} className='lock-svg'/>
            <input type="password" placeholder='Contraseña' />
        </label>
        <label className='checkbox-input'>
            <input type="checkbox" />
            Recordar contraseña
        </label>
        <button>{button}</button>
        <a href="#">{link}</a>
        </form>
  )
}
