import React from "react";


export const ProductCard = () => {
    return(
        <div className="ProductCard">
            <img className="ProductCard-imagen" src="https://www.centraloeste.com.ar/media/catalog/product/cache/bb88872df0550de9ab6783aa9a813141/7/7/7794207085009_1.png" alt="ia"/>
            <div className="ProductCard-datos">
                <a><strong>nombre</strong></a>
                <p>descripcion</p>
                <div className="ProductCard-datos-precio">
                    <a>$10.99</a>
                    <button className="ProductCard-btn">Comprar</button>
                </div>
            </div>
        </div>
    )
}