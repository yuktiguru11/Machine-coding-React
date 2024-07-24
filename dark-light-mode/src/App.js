import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Blog from "./pages/blog.jsx";

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
  </Routes>
  </BrowserRouter>
}

export default App;
