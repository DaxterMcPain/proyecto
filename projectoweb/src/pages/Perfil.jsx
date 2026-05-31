import { useLocation } from "react-router-dom";

function Perfil() {
    const location = useLocation();

    const usuario = location.state;

    return (
        <div className="home">
            <div className="card">
                <h2>Perfil de Usuario</h2>

                <p><strong>Nombre:</strong> {usuario?.name}</p>
                <p><strong>Correo:</strong> {usuario?.email}</p>
                <p><strong>Contraseña:</strong> {usuario?.password}</p>
            </div>
        </div>
    );
}

export default Perfil;