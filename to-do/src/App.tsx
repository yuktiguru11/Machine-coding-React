import { useState } from "react";
interface Item {
  id: number,
  itemName: string
}

function App() {
  const [input, setInput ] = useState<string >("")
  const [toDoarray, setToDoArray]  = useState<Item[]>([])

  const handleOnChange =(e : React.ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value)

  }

  const handleSubmit = (e : React.MouseEvent<HTMLButtonElement>)=>{
    let count : number = 0 
    const newItem: Item = {
      id: count+1,
      itemName : input
    }
    setToDoArray([...toDoarray, newItem]);
    setInput("");

  }

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>)=>{
    console.log("test")
  }
  return (
    <div>
      <input type="text" value={input} onChange={handleOnChange} />
      <button onClick={handleSubmit}>Submit</button>
      {toDoarray.map((arr)=>(
        <div>{arr.itemName}
        <button onClick={handleDelete}>Delete</button> 
        </div>
         
         
      ))}
    </div>
  );
}

export default App;
