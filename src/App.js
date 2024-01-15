import {useState} from 'react';

function App() {
  const [name,setName] = useState('')
  const [mail,setEmail] = useState('')
  const [pass,setPass] = useState('')

  async function registerUser(event){
    event.preventDefault();
    const response = await fetch('http://localhost:3000/api/register',{
      method:'POST',
      header: {
        'Content-Type' : 'application-json'
      },
      body: JSON.stringify({
        name,
       mail,
        pass
      }),
    })

    const data = await  response.json();
    console.log(data);
  }
  return (
    <div>
      Register
      <form onSubmit={registerUser}>
      <input value = {name} 
      onChange={(e)=> setName(e.target.value)}
      placeholder ="Name" type="text"/>
      <br/>
      <input value = {mail} 
      onChange={(e)=> setEmail(e.target.value)} placeholder ="Email" type="email"/>
      <br/>
      <input value = {pass}
      onChange={(e)=> setPass(e.target.value)}
       placeholder ="password" type="password"/>
       <br/>
       <input type="submit" placeholder='Register'/>
      </form>
    </div>
  );
}

export default App;
