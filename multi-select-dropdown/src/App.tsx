import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

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

  const handleChange =(e : React.ChangeEvent<HTMLInputElement>)=>{
    setSearchInput(e.target.value);
  }

  let ep = 'https://dummyjson.com/users/search?q='

  useEffect(()=>{
    if(searchInput.trim()==""){
      setSearchSuggestion([]);
      return;
    }
    // axios.get<User[]>(ep + searchInput).then((res: User[])=>{
    //   setSearchSuggestion(res)
    // })
    axios.request<ServerResponse>({
      url: 'https://example.com/path/to/data',
      transformResponse: (r: ServerResponse) => r.data
    }).then((response) => {
      // `response` is of type `AxiosResponse<ServerData>`
      const { data } = response
      // `data` is of type ServerData, correctly inferred
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
