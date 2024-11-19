import React from 'react'

let productCount = 0;
function displayFormattedProductCount() {
    return productCount > 0 ? productCount : "ZERO";
}

function ProductDetails(props) {

    let badgeClass = "badge-margin-left-240 badge ";
    badgeClass += props.isAvailable ? "badge bg-success" : "badge bg-danger"

    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{ marginRight: "30px" }}>${props.price}</h6>
            <button className="btn btn-primary">-</button>
            <span style={{ padding: "0px 20px", fontSize: "12px" }}>{displayFormattedProductCount()}</span>
            <button className="btn btn-primary ">+</button>
            <span className={badgeClass}>{props.isAvailable ? "Available" : "Unavailable"}</span>
        </div>
    )
}

export default ProductDetails