import React from "react";

let productCount = 0;
let imageUrl = require("../images/fresh-milk.jpg")
// let style = {
//     padding: "0px 20px",
//     fontSize: "12px"
// }

function displayFormattedProductCount() {
    return productCount > 0 ? productCount : "ZERO";
}

function Products() {
    return (
        <>
            <ul className="list-group shadow">
                <li className="list-group-item">
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                        <div className="media-body order-2 order-lg-1">
                            <h5 className="mt-0 font-weight-bold mb-2">Fresh Milk</h5>
                            <p className="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
                            <div className="d-flex align-items-center justify-content-start mt-1">
                                <h6 className="font-weight-bold my-2" style={{ marginRight: "30px" }}>$120.00</h6>
                                <button className="btn btn-primary">-</button>
                                <span style={{ padding: "0px 20px", fontSize: "12px" }}>{displayFormattedProductCount()}</span>
                                <button className="btn btn-primary ">+</button>

                            </div>
                        </div>
                        <img src={imageUrl} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2" />
                    </div>
                </li>
            </ul>
        </>
    );
}

export default Products;
