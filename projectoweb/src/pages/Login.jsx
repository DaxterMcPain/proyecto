import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="home">
            <div className="card">
                <h2>Iniciar Sesión</h2>

                <form className="form">
                    <input type="email" placeholder="Correo" />

                    <input type="password" placeholder="Contraseña" />

                    <button type="submit">
                        Ingresar
                    </button>
                </form>

                <Link to="/">
                    <button className="back">
                        Volver
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Login;