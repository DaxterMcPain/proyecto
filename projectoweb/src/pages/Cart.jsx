import { Link } from "react-router-dom";
import { useState } from "react";
function Cart() {

    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );
    const removeProduct = (indexToRemove) => {
        const newCart = cart.filter(
            (_, index) => index !== indexToRemove
        );
        setCart(newCart);
        localStorage.setItem(
            "cart",
            JSON.stringify(newCart)
        );
    };

    return (
        <div className="catalog-container">
            <h1>Carrito de Compras</h1>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (

                <div className="cart-list">
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

                            <button
                                onClick={() =>
                                    removeProduct(index)
                                }
                            >
                                Eliminar
                            </button>
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