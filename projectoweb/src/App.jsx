import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Home() {
    return (
        <div className="home">
            <div className="card">
                <h1>EcoMarket</h1>

                <p>Compra y venta de productos ecológicos</p>

                <div className="buttons">
                    <Link to="/login">
                        <button>Iniciar Sesión</button>
                    </Link>

                    <Link to="/register">
                        <button>Registrarse</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default App;