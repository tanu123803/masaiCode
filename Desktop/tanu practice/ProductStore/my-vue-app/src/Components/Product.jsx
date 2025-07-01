import React from "react";
import { useEffect,useState } from "react";

function Productdetails(){
    const[product,setProduct]=useState([]);
    const[error,setError]=useState(null)

    async function fetchdata(){
        try {
            let response= await fetch("https://dummyjson.com/products");
            let result=await response.json();
            setProduct(result.products)
            
        } catch (error) {
            
            setError("Having issue with the fetching")
        }
    }

    useEffect(()=>{
        fetchdata();
    },[])




    return(
        <>
        <h1>ProductDetails</h1>
        {product.map(product=>(
            <div key={product.id}>
                <p>{product.price}</p>
                <p>{product.title}</p>
            </div>
        ))}
        
        </>
    )
}
export default Productdetails