import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className='container-header'>
        <div className="img-logo">
            <img src="/PI-G3/public/img/Logo.jpg" alt="logo" />
        </div>
        <div className="container-button">
            <Button>Iniciar Sesion</Button>
            <Button>Crear Cuenta</Button>
        </div>
    </div>
  )
}

export default Header