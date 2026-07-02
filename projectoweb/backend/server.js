import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


let products = [];


// Obtener productos (Catalog)
app.get("/products", (req, res) => {

    res.json(products);

});


// Crear producto (ProductForm)
app.post("/products", (req, res) => {

    const newProduct = {

        id: Date.now(),

        name: req.body.name,

        category: req.body.category,

        price: req.body.price

    };


    products.push(newProduct);


    res.json({
        message: "Producto creado",
        product: newProduct
    });

});


// Eliminar producto
app.delete("/products/:id", (req, res) => {

    products = products.filter(
        product => product.id != req.params.id
    );


    res.json({
        message: "Producto eliminado"
    });

});


app.listen(3000, () => {

    console.log(
        "Servidor funcionando en puerto 3000"
    );

});