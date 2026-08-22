import {useState,useEffect} from "react";
import '../stylesheets/carrito.css';


export const ComprasCard = ({precioTotal,cantidadProductos}) => {
    const [lista_compras, setlista] = useState("compras-list");
    const aparecerLista=()=>{
        setlista("compras-list");
    }
    return(
        <div className="compras-container">
            <div className="comprasCard">
                <a><strong>Lista de compras</strong></a>
                <div className="data-compras">
                    <a>cantidad de productos: {cantidadProductos}</a>
                    <a>Precio Final: ${precioTotal}</a>
                </div>
                <div className="botones-compras">
                    <button>Cancelar</button>
                    <button>Confirmar Compra</button>
                </div>
            </div>
            <ComprasList lista_compras={lista_compras}/>
        </div>
    )
}

export const ComprasResumen = ()=> {
   
    const [compras, setCompras] = useState([]);

    useEffect(() => {
        const loadCompras = async () => {
          try{  
            const response = await fetch(
                "http://localhost:3001/compras"
            );

            const data = await response.json();
            if(!response.ok){
                throw new Error(data.message); 
            }
            setCompras(data);
            } catch (error) {
                console.log(error)
                window.location.href = "/inicio";
            }
        };

        loadCompras();
    }, []);
    console.log(compras);
    const precioTotal = compras.reduce((acumulado, compra) => 
     acumulado + Number(compra.precio)* Number(compra.cantidad), 0);
    const totalProductos = compras.reduce((acumulado, compra) => 
     acumulado +  Number(compra.cantidad), 0);
    return (
                <ComprasCard
                  
                    precioTotal={precioTotal}
                    cantidadProductos={totalProductos}                
                />
    );
};


export const ComprasList = ({lista_compras})=>{
     const [compras, setCompras] = useState([]);

    useEffect(() => {
        const loadCompras = async () => {
          try{  
            const response = await fetch(
                "http://localhost:3001/compras"
            );

            const data = await response.json();
            if(!response.ok){
                throw new Error(data.message); 
            }
            setCompras(data);
            } catch (error) {
                console.log(error)
                window.location.href = "/inicio";
            }
        };

        loadCompras();
    }, []);
    console.log(compras);
    
    return (
              <div className={lista_compras}> 
                {compras.map((compra) => (
                               <CompraCard
                                   key={compra.id}
                                   id={compra.id}
                                   precio={compra.precioNeto}
                                   nombre={compra.nombre}
                                   imagen={compra.imagen}
                                   cantidadProductos={compra.cantidad}
                                   descuento={compra.precio}
                               />
                           ))}</div>
    );
};

export const CompraCard = ({id,nombre,precio,cantidadProductos,imagen,descuento}) => {

    const agregarItem = async() =>{
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
                    descuento,
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
            window.location.href="/carrito"; 
        }
        
    }catch(error){
        console.error(error);
    }
    }
    
    const eliminarCompra = async () =>{
         try{
        const response = await fetch(`http://localhost:3001/compras/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({})
            });
        if(!response.ok){
            const data = await response.json();
            alert(data.message);
            throw new Error(data.message);
        }else{
            alert("producto eliminado del carrito exitosamente");
            window.location.href='/carrito';    
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
                    <a className={cantidadProductos>1 ? 'tachado' : 'normal'}>${descuento} X{cantidadProductos}</a>
                    <a className={cantidadProductos>1 ? 'descuento' : 'no-existe'}>${descuento * cantidadProductos}</a>
                    </div>
                    <button className="ProductCard-btn" onClick={()=>agregarItem()} >AgregarMas</button>
                    <button className="ProductCard-btn" onClick={()=>eliminarCompra()}>Eliminar producto</button>
                </div>
            </div>
        </div>
    )
}