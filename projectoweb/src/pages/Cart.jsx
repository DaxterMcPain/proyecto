import { Link } from "react-router-dom";

function Cart() {

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    return (
        <div className="catalog-container">

            <h1>Carrito de Compras</h1>

            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div className="products-grid">

                    {cart.map((product, index) => (

                        <div
                            className="product-card"
                            key={index}
                        >
                            <h3>{product.name}</h3>

                            <p>
                                Categoría: {product.category}
                            </p>

                            <p>
                                S/ {product.price}
                            </p>
                        </div>

                    ))}

                </div>
            )}

            <br />

            <Link to="/">
                <button>
                    Volver al Catálogo
                </button>
            </Link>

        </div>
    );
}

export default Cart;