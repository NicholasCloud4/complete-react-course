import React, { useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import CreateProduct from "./Components/CreateProduct/CreateProduct";



function App() {

    const [newProduct, setNewProduct] = useState(null);

    function createProduct(product) {
        setNewProduct(product)

    }
    return (
        <>
            <CreateProduct createProduct={createProduct} />
            <ProductList newProduct={newProduct} />
        </>
    );
}

export default App;
