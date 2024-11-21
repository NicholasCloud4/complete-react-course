import React, { useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import FilterProduct from "./Components/FilterProduct/FilterProduct";

let products = [
    {
        pID: 1,
        pName: "Fresh Milk",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
        isAvailable: true,
        image: "images/fresh-milk.png",
        price: 12,
    },
    {
        pID: 2,
        pName: "Cottage Cheese",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
        isAvailable: false,
        image: "images/cottage-cheese.png",
        price: 10,
    },
    {
        pID: 3,
        pName: "Brocoli",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
        isAvailable: true,
        image: "images/brocoli.png",
        price: 15,
    },
    {
        pID: 4,
        pName: "oranges",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
        isAvailable: true,
        image: "images/oranges.png",
        price: 20,
    },
    {
        pID: 5,
        pName: "Olive oil",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
        isAvailable: false,
        image: "images/olive-oil.png",
        price: 14,
    },
    {
        pID: 6,
        pName: "Olive oil TEST",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
        isAvailable: false,
        image: "images/olive-oil.png",
        price: 14,
    },
];


function App() {

    const [newProductList, setNewProductList] = useState(products);
    const [filterTextValue, setFilterTextValue] = useState("all");

    let filteredProductList = newProductList.filter((product) => {
        if (filterTextValue === "available") {
            return product.isAvailable === true
        } else if (filterTextValue === "unavailable") {
            return product.isAvailable === false
        } else {
            return product
        }
    }
    )

    function createProduct(product) {
        product.pID = newProductList.length + 1
        setNewProductList([product, ...newProductList]);
    }

    function onFilterValueSelected(filterValue) {
        setFilterTextValue(filterValue)

    }

    return (
        <>
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <CreateProduct createProduct={createProduct} />
                    <FilterProduct filterValueSelected={onFilterValueSelected} />
                    <ProductList newProductList={filteredProductList} />
                </div>
            </div>
        </>
    );
}

export default App;
