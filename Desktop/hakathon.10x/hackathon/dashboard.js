import{auth ,db}from'./firebase-confi.js';
import{
    onAuthStateChanged,
    
    signOut,
} 
    from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js" 
import{
    doc ,
    getDoc,
    setDoc,
    collection,
    addDoc,
    deleteDoc,
}from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js"
document.addEventListener("DOMContentLoaded",()=>{
    const memelist=document.getElementById("meme-list");
    const memeinput=document.getElementById("avatar");
    const addbutton=document.getElementById("Add+");
    let currentuser= null;
    // check auth state
    onAuthStateChanged(auth,async(user)=>{
        if(user){
            currentuser=user
            document.getElementById("user-email").innertext=currentuser.email
            // fetch user role
            const userDoc=await getDoc(doc(db,"users",user.uid));
            if(userDoc.exists()){
                const role=userDoc.data().role;
                document.getElementById("user-role").innerText=role;
                // load Notes
                memeplayground(user,role)
            }else
        }
        {
                window.location.href="index.html"
            }
    })
    
})