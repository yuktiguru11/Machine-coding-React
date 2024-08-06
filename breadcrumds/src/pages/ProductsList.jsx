
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const ProductList = () => {

    const [productData , setProductData] = useState(null)

    useEffect(()=>{
      fetch('https://dummyjson.com/products').then(res => res.json())
      .then((result)=>{
        setProductData(result.products)
        console.log(productData)
      })
    },[])

    return(
        <>
        <h1>ProductList</h1>
        <div>
            <span>Products</span>
            <div className="product-grid">
                {productData?.map((product)=>(
                     <div key = {product.id} className="product-card">
                        <Link to={`/products/${product.id}`}>
                            <img src={product.thumbnail} alt={product.title}></img>
                            <h3>{product.title}</h3>
                        </Link>
                        </div>
                ))}
            </div>

        </div>
        </>
    )
}

export default ProductList