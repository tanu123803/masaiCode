import React, { useEffect ,useState} from "react";

function Home(){
    const[post,setPost]=useState([]);
    const[error,seterror]=useState(null)

    async function fetchdata(){
        try {
            const response=await fetch("https://dummyjson.com/posts")
            const result=await response.json();
            setPost(result.posts)
            
        } catch (error) {
            seterror("facing issue in fetching the data")
            

        }
    }
    useEffect(()=>{
        fetchdata()
    },[])


    return(
        <>
        <h1>Home</h1>
        {post.map((post) => (  
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
        
        </>
    )
}

export default Home;
