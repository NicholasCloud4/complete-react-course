import React, { useState } from "react";

function ProductForm(props) {
    const [pName, setPName] = useState("");
    const [pPrice, setPPrice] = useState("");
    const [pDescription, setPDescription] = useState("");
    const [pAvailable, setPAvailable] = useState(false);
    const [pImageUrl, setPImageUrl] = useState("");

    // const [userInput, setUserInput] = useState({
    //     pName: "",
    //     pPrice: "",
    //     pDescription: "",
    //     pAvailable: "",
    //     pImageUrl: "",
    // });

    function nameInputHandler(event) {
        setPName(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     pName: event.target.value
        // })

        // setUserInput((prevState) => {
        //     return { ...prevState, pName: event.target.value }
        // })
    }

    function priceInputHandler(event) {
        setPPrice(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     pPrice: event.target.value
        // })
    }

    function descriptionInputHandler(event) {
        setPDescription(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     pDescription: event.target.value
        // })
    }

    function availabilityInputHandler(event) {
        setPAvailable(event.target.checked);
        // setUserInput({
        //     ...userInput,
        //     pAvailable: event.target.value
        // })
    }

    function imageInputHandler(event) {
        setPImageUrl(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     pImageUrl: event.target.value
        // })
    }

    function createProductEventHandler(event) {
        event.preventDefault();
        let product = {
            pName: pName,
            desc: pDescription,
            isAvailable: Boolean(pAvailable),
            image: pImageUrl,
            price: Number(pPrice),
        };

        setPName("")
        setPPrice("")
        setPDescription("")
        setPAvailable(false)
        setPImageUrl("")

        //console.log(product);
        props.createProduct(product);
        props.onCancel();
    }

    return (
        <>
            <form className="row g-3" onSubmit={createProductEventHandler}>
                <div className="col-md-6">
                    <label for="name">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Product Name"
                        value={pName}
                        onChange={nameInputHandler}
                    />
                </div>
                <div className="col-md-6">
                    <label for="price">Product Price</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        className="form-control"
                        id="price"
                        placeholder="Product Price"
                        value={pPrice}
                        onChange={priceInputHandler}
                    />
                </div>

                <div className="form-group">
                    <label for="description">Product Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="Product Description"
                        value={pDescription}
                        onChange={descriptionInputHandler}
                    />
                </div>

                <div class="form-check form-switch">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="isAvailable"
                        value={pAvailable}
                        onChange={availabilityInputHandler}
                    />
                    <label class="form-check-label" for="isAvailable">
                        Is product available in stock?
                    </label>
                </div>

                <div className="form-group">
                    <label for="select-image">Select product image</label>
                    <input
                        type="file"
                        className="form-control"
                        id="select-image"
                        value={pImageUrl}
                        onChange={imageInputHandler}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Add Product
                </button>

                <button type="button" onClick={props.onCancel}>Cancel</button>
            </form>
        </>
    );
}

export default ProductForm;
