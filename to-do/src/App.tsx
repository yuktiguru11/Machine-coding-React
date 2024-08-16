import { useState } from "react";

function App() {
  const [input, setInput ] = useState<string >("")
  const [toDoarray, setToDoArray]  = useState<string[]>([])

  const handleOnChange =(e : React.ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value)

  }

  const handleSubmit = (e : React.MouseEvent<HTMLButtonElement>)=>{
    setToDoArray([...toDoarray, input]);
    setInput("");

  }
  return (
    <div>
      <input type="text" value={input} onChange={handleOnChange} />
      <button onClick={handleSubmit}>Submit</button>
      {toDoarray.map((arr)=>(
        <div>{arr}</div>
            
         
      ))}
    </div>
  );
}

export default App;
