import { useState } from "react";

function App() {
  const [input, setInput ] = useState<string >("")
  const array : string[] = []

  const handleOnChange =(e : React.ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value)
  }

  const handleSubmit = (e : React.MouseEvent<HTMLButtonElement>)=>{
    array.push(input)
  }
  return (
    <div>
      <input type="text" onChange={handleOnChange} />
      <button onClick={handleSubmit}>Submit</button>
      {array.map((arr)=>(
        <div>{arr}</div>
            
         
      ))}
    </div>
  );
}

export default App;
