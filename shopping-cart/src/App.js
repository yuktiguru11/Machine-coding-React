import { useEffect, useReducer} from 'react'
import axios from "axios"
import { cartReducer } from './reducers/cartReducer';
import Products from './components/products';
import Cart from './components/cart';

function App() {

  const [state , dispatch] = useReducer(cartReducer,
    {products: [],
      cart:[]}
  )

  const getProductDetails = async()=>{
    const data = await axios.get('https://dummyjson.com/products');
    const products =  data.data.products;
     dispatch({
      type: "ADD_PRODUCT",
      payload: products
     })
  }

  useEffect(()=>{
    getProductDetails();
  },[])

  return (
    <div style={{display:"flex"}}>
      <Products state={state} dispatch = {dispatch}/>
      <Cart state={state} dispatch = {dispatch}/>
    </div>
  );
}

export default App;
