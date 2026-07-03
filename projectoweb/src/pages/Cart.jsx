import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Cart() {
const navigate = useNavigate();

    const [cart, setCart] = useState([]);

    useEffect(() => {

        const fetchCart = async () => {

            try {

                const response = await fetch(
                    "http://localhost:3000/cart"
                );

                const data = await response.json();

                setCart(data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchCart();

    }, []);

    const loadCart = async () => {

        try {

            const response = await fetch(
                "http://localhost:3000/cart"
            );

            const data = await response.json();

            setCart(data);

        } catch (error) {

            console.log(error);

        }

    };

    const total = cart.reduce(
    (sum, product) => sum + Number(product.price),
    0
    );

    const removeProduct = async (id) => {

        try {

            await fetch(
                `http://localhost:3000/cart/${id}`,
                {
                    method: "DELETE"
                }
            );

            await loadCart();

        } catch (error) {

            console.log(error);

        }

    };

    const finishPurchase = async () => {

        try {

            const response = await fetch(
                "http://localhost:3000/purchase",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        total
                    })
                }
            );

            const data = await response.json();

            alert(data.message);

            setCart([]);

            navigate("/");

        } catch (error) {

            console.log(error);

        }

    };

    return (
        <div className="catalog-container">
            <h1>Carrito de Compras</h1>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (

                <div className="cart-list">
                    {cart.map((product) => (
                        <div
                            className="product-card"
                            key={product.id}
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
                                    removeProduct(product.id)
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
