import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
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
