import '../stylesheets/inicio-sesion.css';

export const InicioSesionForm = () => {
    return(
        <form>
            <label className='form-label' htmlFor="email">Email:</label>
            <input className='form-input' type="email" id="email" name="email" required />
            <br />
            <label className='form-label' htmlFor="password">Contraseña:</label>
            <input className='form-input' type="password" id="password" name="password" required />
            <br />
            <button className='form-button' type="submit">Iniciar sesión</button>
            <button className='form-button' type="button">Registrarse</button>
        </form>
    );
}