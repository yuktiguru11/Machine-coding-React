import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface User {
  firstName: string;
  lastName : string; 
}


function App() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchSuggestion, setSearchSuggestion] = useState<string[]>([]);

  const handleChange =(e : React.ChangeEvent<HTMLInputElement>)=>{
    setSearchInput(e.target.value);
  }

  let ep = 'https://dummyjson.com/users/search?q='

  useEffect(()=>{
    axios.get<User[]>(ep).then((res: AxiosResponse)=>{

    })
  },[searchInput])

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
