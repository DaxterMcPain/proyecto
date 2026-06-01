import { useState } from "react";
import { Link } from "react-router-dom";

function Admin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [access, setAccess] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (
            email === "admin@gmail.com" &&
            password === "admin123"
        ) {
            setAccess(true);
            setError("");
        } else {
            setError("Correo o contraseña incorrectos");
        }
    };

    if (access) {
        return (
            <div className="home">
                <div className="card">
                    <h2>Panel Administrativo</h2>

                    <p>Bienvenido Administrador</p>

                    <Link to="/products">
                        <button>Gestionar Productos</button>
                    </Link>

                    <button>Gestionar Usuarios</button>

                    <button>Ver Reportes</button>
                </div>
            </div>
        );
    }

    return (
        <div className="home">
            <div className="card">
                <h2>Acceso Administrador</h2>

                <form className="form" onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">
                        Ingresar
                    </button>

                    <Link to="/">
                        <button>Volver</button>
                    </Link>

                    {error && (
                        <p style={{ color: "red" }}>
                            {error}
                        </p>
                    )}

                </form>
            </div>
        </div>
    );
}

export default Admin;