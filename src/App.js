import "./App.css"
import Products from "./Components/Products";
import bootstrap from 'bootstrap'

function App() {

    return (
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <Products />
            </div>
        </div>
    )
}

export default App;