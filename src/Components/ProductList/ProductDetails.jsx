import React, { useState } from 'react'
import Button from './Button';


function ProductDetails(props) {

    let badgeClass = "badge-margin-left-240 badge ";
    badgeClass += props.isAvailable ? "badge bg-success" : "badge bg-danger"

    // let productCount = 0;
    const [productCount, setProductCount] = useState(0);
    function displayFormattedProductCount() {
        return productCount > 0 ? productCount : 0;
    }

    function incrementProductCount() {
        // productCount++;
        // console.log(productCount)
        setProductCount(productCount + 1);
    }

    function decrementProductCount() {
        // productCount--;
        // console.log(productCount)
        setProductCount(productCount - 1);
    }

    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{ marginRight: "30px" }}>${props.price}</h6>
            <Button eventHandler={decrementProductCount} disable={productCount === 0}>-</Button>
            <span style={{ padding: "0px 20px", fontSize: "12px" }}>{displayFormattedProductCount()}</span>
            <Button eventHandler={incrementProductCount}>+</Button>
            <span className={badgeClass}>{props.isAvailable ? "Available" : "Unavailable"}</span>

        </div>
    )

    // return React.createElement("div", { className: "d-flex align-items-center justify-content-start mt-1" },
    //     React.createElement("h6", { className: "font-weight-bold my-2", style: { marginRight: "30px" } }, "$" + props.price),
    //     React.createElement(Button, {}, "-"),
    //     React.createElement("span", { style: { padding: "0px 20px", fontSize: "12px" } }, displayFormattedProductCount()),
    //     React.createElement(Button, {}, "+"),
    //     React.createElement("span", { className: badgeClass }, props.isAvailable ? "Available" : "Unavailable")
    // )
}

export default ProductDetails