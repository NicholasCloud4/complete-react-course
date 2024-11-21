import React, { useState } from 'react'
import Products from "./Products";



function ProductList(props) {
    //console.log(props.newProduct)

    if (props.newProductList.length === 0) {
        return (
            <h3>No Products Available</h3>
        )
    } else {
        return (
            <ul className="list-group shadow">
                {props.newProductList.map((product) => {
                    return (
                        <Products
                            key={product?.pID}
                            id={product?.pID}
                            name={product?.pName}
                            description={product?.desc}
                            isAvailable={product?.isAvailable}
                            imageUrl={product?.image}
                            price={product?.price}
                        />
                    )
                })}
            </ul>
        )
    }
}

export default ProductList