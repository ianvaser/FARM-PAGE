import InicioSesion from '../pages/inicio-sesion';
import '../stylesheets/inicio-sesion.css';
import {useState} from 'react';

export const InicioSesionForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };
    const InicioSesion = () =>{
        const data = {
            email: email,
            password:password
        };
    if(!email || !password){
        alert("Por favor complete todos los campos");
        return;
    }
    if(!email.includes("@")){
        alert("Por favor ingrese un email válido");
        return;
    }
    
    fetch("http://localhost:3001/login/inicio-sesion", {
    method: "POST",
  headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })
    .then(async response => {
        const data = await response.json();

        if (!response.ok) {

            throw new Error(data.errorMessage);

        }

        alert("Login correcto");

        window.location.href = "/inicio";})

    .catch(error => {

    console.error(error);

    alert("usuario o contraseña incorrectos");

    });
    }
    const registro = () =>{
        const data = {
            email: email,
            password:password
        };
    if(!email || !password){
        alert("Por favor complete todos los campos");
        return;
    }
    if(!email.includes("@")){
        alert("Por favor ingrese un email válido");
        return;
    }
    if(password.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }
    fetch("http://localhost:3001/login/registro", {
    method: "POST",
  headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {

    console.log(data);

    alert("Usuario registrado con éxito");

    window.location.href = "/inicio";

    })

    .catch(error => {

    console.error(error);

    alert("Error al registrar usuario");

    });
    }

    return(
        <form onSubmit={handleSubmit} className='inicio-sesion-form'>
            <label className='form-label' htmlFor="email">Email:</label>
            <input 
                className='form-input' 
                type="email" 
                id="email" 
                name="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <br />
            <label className='form-label' htmlFor="password">Contraseña:</label>
            <input 
                className='form-input' 
                type="password" 
                id="password" 
                name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <br />
            <button className='form-button' type="submit" onClick={e => InicioSesion()}>Iniciar sesión</button>
            <button className='form-button' type="button" onClick={e => registro()}>Registrarse</button>
        </form>
    );
}

