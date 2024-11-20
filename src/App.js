import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import CreateProduct from "./Components/ProductList/CreateProduct/CreateProduct";
import bootstrap from "bootstrap";



function App() {
    return (
        <>
            <CreateProduct />
            <ProductList />
        </>
    );
}

export default App;
