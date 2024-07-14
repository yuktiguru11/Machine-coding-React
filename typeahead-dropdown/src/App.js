import Autocomplete from './components/autocomplete'

function App() {

  // const staticData = [
  //   "apple pie",
  //   "chocolate shake",
  //   "pizza",
  //   "passta",
  //   "coffee"
  // ]

  const requestUrl = 'https://dummyjson.com/recipes/search?q='
  const fetchSuggestion = async (query)=>{
    const response = await fetch(requestUrl + query);
    if(!response.ok){
      throw new Error("Cant fetch Suggestion")
    }
    const results = await response.json();
    return results.recipes;
  }
  //const customStyles = '';

  return (
    <div >
      <h1>Autocomplete Typeahead</h1>
      <Autocomplete
      //staticData={staticData}
      placeholder = "Search Here"
      fetchSuggestion = {fetchSuggestion}
      dataKey = {"name"}
      customLoader = {<>Loading...</>}
      onSelect= {(res)=>( console.log(res))}
      onChange={(e)=>{}}
      onBlur={()=>{}}
      onFocus={()=>{}}
      customStyles={{}}
      />
    </div>
  );
}

export default App;
