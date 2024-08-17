import { useState } from "react";


function App() {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleChange =(e : React.ChangeEvent<HTMLInputElement>)=>{
    setSearchInput(e.target.value);
  }

  return (
    <div className="user-search-cointainer">
      <div className="user-search-input"> 
    <div >
     <input type="text" value={searchInput} onChange={handleChange}
     placeholder="Search for User.."></input>
    </div>
    </div>
    </div>
  );
}

export default App;
