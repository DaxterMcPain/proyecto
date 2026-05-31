import { Routes, Route } from "react-router-dom";

import Catalog from "./pages/Catalog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductForm from "./pages/ProductForm";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductForm />} />
        </Routes>
    );
}

export default App;