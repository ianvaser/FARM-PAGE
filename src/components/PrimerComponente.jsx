import React,{useState} from "react";


export const PrimerComponente = () =>{
  const [nombre, setNombre] = useState("Juan");
  const cambiarNombre = (nuevoNombre) => {
       setNombre(nuevoNombre);
    }
  

    return (
    <div>
      <h1>Hola, soy el primer componente</h1>
        <p>este es mi <strong className={nombre.length > 5 ? 'verde' : 'rojo'}>{nombre}</strong> componente en React</p>
        <input type="text" onChange={e => cambiarNombre(e.target.value)} />
        <button onClick={e => cambiarNombre("proyecto")}>Click</button>
    </div>
  );
}