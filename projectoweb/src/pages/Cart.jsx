import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Cart() {
const navigate = useNavigate();

    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );

    const total = cart.reduce(
    (sum, product) => sum + Number(product.price),
    0
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

    const finishPurchase = () => {

    const purchases =
        JSON.parse(localStorage.getItem("purchases")) || [];

    purchases.push({
        id: Date.now(),
        products: cart,
        total: total,
        date: new Date().toLocaleDateString()
    });

    localStorage.setItem(
        "purchases",
        JSON.stringify(purchases)
    );

    localStorage.removeItem("cart");

    setCart([]);

    alert("Compra realizada correctamente");

    navigate("/");
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

                {cart.length > 0 && (
                    <div style={{ marginTop: "20px" }}>
                        <h2>Total: S/ {total}</h2>
                        <button
                            onClick={finishPurchase}
                        >
                            Finalizar Compra
                        </button>
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
