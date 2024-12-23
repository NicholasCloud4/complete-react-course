import React from 'react'
import "./FilterProduct.css"

function FilterProduct(props) {

    function onFilterValueChanged(event) {
        // console.log(event.target.value)
        props.filterValueSelected(event.target.value)
    }

    return (
        <div className="filter-area">
            <select name="isAvailable" onChange={onFilterValueChanged}>
                <option value="all">All</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
            </select>
        </div>
    )
}

export default FilterProduct