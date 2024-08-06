import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const Home = () => {

    const [productData , setProductData] = useState(null)

    useEffect(()=>{
      fetch('https://dummyjson.com/products').then(res => res.json())
      .then((result)=>{
        const slicedTrendingProducts = result.products.slice(0, 6);
        setProductData(slicedTrendingProducts)
      })
    },[])

    return(
        <>
        <h1>Home</h1>
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

            <Link to="/products">
        <button style={{width: "100%", padding: 10}}>View All Products</button>
      </Link>

        </div>
        </>
    )
}

export default Home