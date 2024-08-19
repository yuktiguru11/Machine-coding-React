import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import useDebounce from "./hooks/use-debounce";

interface User {
  firstName: string;
  lastName : string; 
}
interface ServerResponse {
  data : User
}


function App() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchSuggestion, setSearchSuggestion] = useState<User[]>([]);
  const debouncedValue = useDebounce(searchInput)

  const handleChange =(e : React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  let ep = 'https://dummyjson.com/users/search?q='

  useEffect(()=>{
    if(debouncedValue.trim()==""){
      setSearchSuggestion([]); 
      return;
    }
    axios.request<ServerResponse>({
      url: ep+debouncedValue,
      transformResponse: (r: ServerResponse) => r.data
    }).then((response) => {
      // `response` is of type `AxiosResponse<ServerData>`
      const { data } = response
      // `data` is of type ServerData, correctly inferred
    })
  },[debouncedValue])

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
