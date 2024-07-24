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
