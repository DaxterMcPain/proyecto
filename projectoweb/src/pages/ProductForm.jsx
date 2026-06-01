import { useState } from "react";
import { Link } from "react-router-dom";

function ProductForm() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const product = {
            name,
            description,
            price
        };

        console.log(product);

        alert("Producto guardado");
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

                    <textarea
                        placeholder="Descripción"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

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