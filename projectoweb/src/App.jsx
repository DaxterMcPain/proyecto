import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductForm from "./pages/ProductForm";
import Catalog from "./pages/Catalog";

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

                    <Link to="/products">
                        <button>Gestión de Productos</button>
                    </Link>

                    <Link to="/catalog">
                        <button>Catálogo</button>
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
            <Route path="/products" element={<ProductForm />} />
            <Route path="/catalog" element={<Catalog />} />
        </Routes>
    );
}

export default App;