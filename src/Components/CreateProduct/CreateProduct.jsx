import React from 'react'
import ProductForm from './ProductForm'

function CreateProduct(props) {

    function onCreateProduct(product) {
        // console.log(product)
        props.createProduct(product)
    }

    return (
        <div style={{ backgroundColor: "white", padding: "10px 20px", borderRadius: "5px" }}>
            <ProductForm createProduct={onCreateProduct} />
        </div>

    )
}

export default CreateProduct