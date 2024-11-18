import "./App.css"
import Products from "./Components/Products";

function App() {

    let msg = "awesome"

    return (
        <>
            <h1 className="myHeader">This is my header</h1>
            <p className="myParagraph">This is my first {msg} React app {10 + 8}</p>
            <Products />
        </>
    )
}

export default App;