import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Navbar from "./components/navbar";
import './styles.css';
import {ThemeProvider} from './theme-context'

function App() {
  return (
    <ThemeProvider>
  
  <Router>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
  </Routes>
  </Router>
  </ThemeProvider>
  ) 
}

export default App;
