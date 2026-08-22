import InicioSesion from '../pages/inicio-sesion';
import '../stylesheets/inicio-sesion.css';
import {useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import{auth} from '../data/firebase.js';
import { FcGoogle } from "react-icons/fc";
import{FaUser,FaLock,FaSignInAlt,FaUserPlus} from "react-icons/fa";
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

const provider = new GoogleAuthProvider();
const loginGoogle = async () => {
    try {
           const result = await signInWithPopup(auth, provider);
           const user = result.user;
           console.log(user);
           const token = await user.getIdToken();
           const idUsuario = user.uid;
           await fetch(`http://localhost:3001/login/google/${idUsuario}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({})
            });
           window.location.href = "/inicio"
        } 
    catch (error) {
         console.error(error);
        }
    };

    const Registro = () =>{
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
            <div className='input-group'>
            <FaUser />
            <input 
                className='form-input' 
                type="email" 
                id="email" 
                name="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            </div>
            <br />
            <label className='form-label' htmlFor="password">Contraseña:</label>
            <div className='input-group'>
            <FaLock />
            <input 
                className='form-input' 
                type="password" 
                id="password" 
                name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            </div>
            <br />
            <button className='form-button' type="submit" onClick={e => InicioSesion()}><FaSignInAlt/> Iniciar sesión</button>
            <button className='form-button-google' type="button" onClick={e => loginGoogle()}><FcGoogle size={30} /></button>    
            <button className='form-button' type="button" onClick={e => Registro()}><FaUserPlus/> Crear Nueva Cuenta</button>
        </form>
    );
}

