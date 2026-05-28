import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="home">
            <div className="card">
                <h2>Registro</h2>

                <form className="form">
                    <input type="text" placeholder="Nombre" />

                    <input type="email" placeholder="Correo" />

                    <input type="password" placeholder="Contraseña" />

                    <button type="submit">
                        Registrarse
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

export default Register;