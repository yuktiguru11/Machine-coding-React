import { useState , useEffect} from "react";
import { useParams } from "react-router-dom"

const ProductDetail = () => {
const {id} = useParams();
const [product, setProduct] = useState(null)

useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`).then(res => res.json())
    .then((result)=>{
      setProduct(result)
    })
  },[])

    return(
        {product:(
            <div style={{display: "flex"}}>
                <img style = {{height: 300}}src={product.thumbnail}></img>
                <div>
                <h3>{product.title}</h3>
                <h3>{product.price}</h3>
                <h3>{product.description}</h3>
                </div>
                </div>
            
        )}
        
    )
}

export default ProductDetail