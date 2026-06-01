import { Link } from "react-router-dom";
import { useState } from "react";

function Catalog() {

    const productsData = [
        {
            id: 1,
            name: "Bolsa ecológica",
            category: "Accesorios",
            price: 15
        },
        {
            id: 2,
            name: "Botella reutilizable",
            category: "Hogar",
            price: 25
        },
        {
            id: 3,
            name: "Cepillo de bambú",
            category: "Higiene",
            price: 12
        }
    ];

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const filteredProducts = productsData.filter((product) => {

        const matchesSearch =
            product.name.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            category === "" || product.category === category;

        const matchesPrice =
            maxPrice === "" || product.price <= Number(maxPrice);

        return matchesSearch && matchesCategory && matchesPrice;
    });

    return (
        <div className="catalog-container">

            <nav className="navbar">
                <div className="logo">
                    <h2>EcoMarket</h2>
                </div>

                <div className="nav-links">
                    <Link to="/products">Gestionar Productos</Link>
                    <Link to="/login">Iniciar Sesión</Link>
                    <Link to="/admin">Administrador</Link>
                </div>
            </nav>

            <h1>Catálogo de Productos</h1>

            <div className="filters">

                <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Todas las categorías</option>
                    <option value="Accesorios">Accesorios</option>
                    <option value="Hogar">Hogar</option>
                    <option value="Higiene">Higiene</option>
                </select>

                <input
                    type="number"
                    placeholder="Precio máximo"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />

            </div>

            <div className="products-grid">

                {filteredProducts.map((product) => (

                    <div className="product-card" key={product.id}>

                        <h3>{product.name}</h3>

                        <p>Categoría: {product.category}</p>

                        <p>S/ {product.price}</p>

                        <button>Ver Producto</button>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Catalog;