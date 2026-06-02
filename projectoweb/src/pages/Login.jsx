import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        localStorage.setItem(
            "currentUser",
            JSON.stringify({
                name,
                email,
                password
            })
        );

        navigate("/perfil", {
            state: {
                name,
                email,
                password
            }
        });
    };
    return (
        <div className="home">
            <div className="card">
                <h2>Iniciar Sesión</h2>

                <form className="form" onSubmit={handleLogin}>

                    <input
                        type="text"
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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
                        Iniciar Sesión
                    </button>

                    <Link to="/">
                        <button>Volver</button>
                    </Link>

                </form>
            </div>
        </div>
    );
}

export default Login;
