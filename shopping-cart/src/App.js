import { useEffect, useReducer} from 'react'
import axios from "axios"
import { cartReducer } from './reducers/cartReducer';

function App() {

  const [state , dispatch] = useReducer(cartReducer,
    {productDetails: [],
      cart:[]}
  )

  const getProductDetails = async()=>{
    const data = await axios.get('https://dummyjson.com/products');
    const productDetails =  data.data.products;
     dispatch({
      type: "ADD_PRODUCT",
      payload: productDetails
     })
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
