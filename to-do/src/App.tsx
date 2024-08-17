import { useState } from "react";
interface Item {
  id: number,
  itemName: string
}

function App() {
  const [input, setInput ] = useState<string >("")
  const [toDoarray, setToDoArray]  = useState<Item[]>([])
  const [inputId, setInputId ] = useState<number >(0)


  const handleOnChange =(e : React.ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value)

  }

  const handleSubmit = (e : React.MouseEvent<HTMLButtonElement>)=>{
    let newId = inputId+1;
    const newItem: Item = {
      id: newId,
      itemName : input
    }
    setToDoArray([...toDoarray, newItem]);
    setInput("");
    setInputId(newId);

  }

  const handleDelete = (keyId : number)=>{
    let filterData = toDoarray.filter((arr)=>arr.id !== keyId)
    setToDoArray(filterData);
  }
  return (
    <div>
      <input type="text" value={input} onChange={handleOnChange} />
      <button onClick={handleSubmit}>Submit</button>
      {toDoarray?.map((arr)=>(
        <div key={arr.id}>{arr.itemName}
        <button onClick={()=>handleDelete(arr.id)}>Delete</button> 
        </div>
         
         
      ))}
    </div>
  );
}

export default App;
