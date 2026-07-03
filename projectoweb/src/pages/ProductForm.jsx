import { useState } from "react";
import { Link } from "react-router-dom";

function ProductForm() {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProduct = {
            name,
            category,
            price: Number(price)
        };

        try {
            const response = await fetch(
                "http://localhost:3000/products",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newProduct)
                }
            );

            const data = await response.json();

            
            alert(data.message);

        } catch (error) {
            console.log(error);
        }
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