import React, { useEffect ,useState} from "react";

function ProductList(){
    const [product,setProduct]=useState([])

    async function fetchData(){
        try {
            let response=await fetch("https://fakestoreapi.com/products")
            let result=await response.json();
            setProduct(result)
            
        } catch (error) {
            console.log("erroor occured")
            
        }
        
    }
    useEffect(()=>{
        fetchData()

    },[])
    return(
        <>
        <h1>ProductList</h1>
        <div>
            {product.map(product=>(
                <div key={product.id}>
                    <img src={product.image} alt={product.title} width="150" />
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>

                </div>

            ))}
        </div>
        </>

    )

}
export default ProductList