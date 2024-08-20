import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import useDebounce from "./hooks/use-debounce";

interface User {
  firstName: string;
  lastName : string; 
}


function App() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchSuggestion, setSearchSuggestion] = useState<User[]>([]);
  const debouncedValue = useDebounce(searchInput)
  console.log(debouncedValue)


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

    axios.get('https://dummyjson.com/users/search?q='+searchInput)
    .then(response => {
        // Extract `firstname` and `lastname` for each user in the response
        const users: User[] = response.data.users.map((user: any) => ({
            firstname: user.firstname,
            lastname: user.lastname,
        }));
        setSearchSuggestion(users);
    })
  },[debouncedValue])



  return (
    <div className="user-search-cointainer">
      <div className="user-search-input"> 
    <div >
     <input type="text" value={searchInput} onChange={handleChange}
     placeholder="Search for User.."></input>
     {setSearchSuggestion?.map((user : User[])=>{
      
     })}
    </div>
    </div>
    </div>
  );
}

export default App;
