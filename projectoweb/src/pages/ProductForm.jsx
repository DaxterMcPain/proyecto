import { useState } from "react";
import { Link } from "react-router-dom";

function ProductForm() {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id: Date.now(),
            name,
            category,
            price: Number(price)
        };

        const savedProducts =
            JSON.parse(localStorage.getItem("products")) || [];

        savedProducts.push(newProduct);

        localStorage.setItem(
            "products",
            JSON.stringify(savedProducts)
        );

        alert("Producto guardado");

        setName("");
        setCategory("");
        setPrice("");
    };



    return (
        <div className="home">
            <div className="card">

                <h2>Gestión de Productos</h2>

                <form className="form" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Nombre del producto"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">
                            Seleccione una categoría
                        </option>

                        <option value="Accesorios">
                            Accesorios
                        </option>

                        <option value="Hogar">
                            Hogar
                        </option>

                        <option value="Higiene">
                            Higiene
                        </option>

                    </select>

                    <input
                        type="number"
                        placeholder="Precio"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <button type="submit">
                        Guardar Producto
                    </button>

                </form>

                <Link to="/admin">
                    <button>Volver</button>
                </Link>

            </div>
        </div>
    );
}

export default ProductForm;