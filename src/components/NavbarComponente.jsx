import React from 'react'
import {useState} from 'react';
import "../App.css"

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
            </ul>
            <div className="d-flex">
              <li className="nav-inicio-sesion">
                  <a className="nav-link-inicio-sesion" href="iniciar-sesion">Iniciar sesión</a>
              </li>
            </div>
            <div className="carrito" onClick={e=>window.location.href = "/carrito"}>
              <button className='carrito-button' href='carrito'>
                <img className="carrito-imagen" src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="carrito"/>
              </button>
            </div>
    </div>
  )
}
