import { InicioSesionForm } from "../components/InicioSesionForm";
import '../stylesheets/inicio-sesion.css';

export default function InicioSesion() {
return(
    <div className="inicio-sesion">
        <div className="inicio-sesion-container">
            <h1>Iniciar sesion</h1>
            <InicioSesionForm />
        </div>
    </div>
);
}
