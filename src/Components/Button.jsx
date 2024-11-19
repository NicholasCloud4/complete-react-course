import React from 'react'

function btnClickEventHandler() {
    console.log("Button clicked!")
}

function Button(props) {
    return (
        <button onClick={btnClickEventHandler} className="btn btn-primary">{props.children}</button>
    )
}

export default Button