import React, {useEffect , useState} from "react";



export const ProductCard = ({id,nombre,precio,imagen,descuento}) => {
    var precioConDescuento = (precio - (precio * ((100-descuento) / 100))).toFixed(2);
    if(!descuento){
        precioConDescuento = precio;
    }
    const agregarACarrito = async()=>{
    const cantidad = 1;    
    try{
        const response = await fetch(`http://localhost:3001/compras/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id,
                    nombre,
                    precioConDescuento,
                    imagen,
                    precio,
                    cantidad
                })
            });
        if(!response.ok){
            const data = await response.json();
            alert(data.message);
            throw new Error(data.message);
        }else{
            alert("producto anadido al carrito exitosamente");    
        }
        
    }catch(error){
        console.error(error);
    }
}
    
    return(
        
        <div className="ProductCard">
            <img className="ProductCard-imagen" src={imagen} alt="producto"/>
            <div className="ProductCard-datos">
                <a><strong>{nombre}</strong></a>
                <div className="ProductCard-datos-precio">
                    <div className="precio-container">
                        <a className={descuento>0 ? 'tachado' : 'normal'}>${precio}</a>
                        <a className={descuento>0 ? 'descuento' : 'no-existe'}>${precioConDescuento}</a>
                    </div>
                    <button className="ProductCard-btn" onClick={e=>agregarACarrito()}>Agregar a carrito</button>
                </div>
            </div>
        </div>
    )
}


export const ProductList = ()=> {
   
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
          try{  
            const response = await fetch(
                "http://localhost:3001/api/products"
            );
            
            const data = await response.json();
            if(!response.ok){
                throw new Error(data.message); 
            }
            setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadProducts();
    }, []);

    return (
        <div className="ProductList">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    id = {product.id}
                    nombre={product.nombre}
                    precio={product.precio}
                    imagen={product.imagen}
                    descuento={product.descuento}
                />
            ))}
        </div>
    );
};
