import { useLocation, useNavigate } from "react-router-dom";

function Perfil() {
    const location = useLocation();
    const navigate = useNavigate();

    const usuario = location.state;

    return (
        <div className="home">
            <div className="card">
                <h2>Perfil de Usuario</h2>

                <p><strong>Nombre:</strong> {usuario?.name}</p>
                <p><strong>Correo:</strong> {usuario?.email}</p>
                <p><strong>Contraseña:</strong> ********</p>
                
               <button
                    className="back"
                    onClick={() => navigate("/")}
                >
                    Volver al catálogo
                </button>

                <button
                    onClick={() => {
                        localStorage.removeItem("currentUser");
                        navigate("/");
                    }}
                >
                    Cerrar Sesión
                </button> 
                
            </div>
        </div>
    );
}

export default Perfil;
