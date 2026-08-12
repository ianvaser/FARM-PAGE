import '../stylesheets/inicio-sesion.css';
import {useState} from 'react';

export const InicioSesionForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

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
    fetch("http://localhost:3001/login/inicio-sesion", {
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
            <button className='form-button' type="submit">Iniciar sesión</button>
            <button className='form-button' type="button" onClick={e => registro()}>Registrarse</button>
        </form>
    );
}

