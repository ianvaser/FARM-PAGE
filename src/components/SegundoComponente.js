import React from 'react'

export const SegundoComponente = () => {
  return (
    <div className="navbar bg-primary navbar-expand-lg bg-body-tertiary">
            <h4 className="navbar-brand">Farmacia Del Plata</h4>
            <ul className="navbar-nav ">
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Sobre nosotros</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Prodctos</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Contacto</a>
                </li>
            </ul>
    </div>
  )
}
