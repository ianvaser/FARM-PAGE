import React from 'react'

export const SegundoComponente = () => {
  return (
    <div className="navbar bg-primary navbar-expand-lg bg-body-tertiary">
            <h4 className="navbar-brand">Farmacia Del Plata</h4>
            <ul className="navbar-nav ">
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="inicio">Inicio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="sobre-nosotros">Sobre nosotros</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="productos">Productos</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="contacto">Contacto</a>
                </li>
            </ul>
    </div>
  )
}
