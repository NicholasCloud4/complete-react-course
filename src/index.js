import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

//const header = <h1>This is my first React app</h1>
// console.log(header)

//ReactDOM.render(header, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

// let div = document.getElementById("root")
// div.append(App())