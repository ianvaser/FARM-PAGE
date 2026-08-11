import React from 'react'

export const NavbarComponente = () => {
  return (
    <div className="navbar-container bg-primary navbar-expand-lg bg-body-tertiary">
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
            <div className="d-flex">
              <li className="nav-inicio-sesion">
                  <a className="nav-link-inicio-sesion" href="iniciar-sesion">Iniciar sesión</a>
              </li>
            </div>
            <img src="../assets/carrito-de-compras.png" alt="carrito" width={20} />
    </div>
  )
}
