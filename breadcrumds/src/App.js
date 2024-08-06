import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ProductsList from "./pages/ProductsList";

function App() {

  useEffect(()=>{
    fetch('https://dummyjson.com/products').then(res => res.json())
    .then((result)=>{
      console.log(result)
    })
  },[])

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<ProductsList/>}></Route>
        <Route path="/products/:id" element={<ProductDetail/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
