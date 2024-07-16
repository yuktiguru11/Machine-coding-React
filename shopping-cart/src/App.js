import { useEffect, useReducer} from 'react'
import axios from "axios"

function App() {

  const [state , dispatch] = useReducer()

  const getProductDetails = async()=>{
    const data = await axios.get('https://dummyjson.com/products');
    const productDetails =  data.data.products;
    console.log(productDetails)
  }

  useEffect(()=>{
    getProductDetails();
  },[])

  return (
    <div >
      
    </div>
  );
}

export default App;
