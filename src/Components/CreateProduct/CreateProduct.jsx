import React, { useState } from 'react'
import ProductForm from './ProductForm'

function CreateProduct(props) {
    const [showForm, setShowForm] = useState(false);

    function onCreateProduct(product) {
        // console.log(product)
        props.createProduct(product)
    }

    function onCreateNewProduct() {
        setShowForm(true);
    }

    function onProductSubmittedOrCancelled() {
        setShowForm(false);
    }

    return (
        <div style={{ backgroundColor: "white", padding: "10px 20px", borderRadius: "5px" }}>
            {!showForm && <button onClick={onCreateNewProduct}>Create New Product</button>}
            {showForm && <ProductForm createProduct={onCreateProduct} onCancel={onProductSubmittedOrCancelled} />}
        </div>

    )
}

export default CreateProduct