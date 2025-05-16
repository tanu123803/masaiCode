import{auth ,db}from'./firebase-confi.js';
import{
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut} 
    from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js" 
import{doc ,getDoc,setDoc}from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js"
document.addEventListener("DOMContentLoaded",()=>{
    const loginbutton=document.getElementById("login-btn");
    const signinbutton=document.getElementById("signup-btn");
    const logoutbutton=document.getElementById("logout-btn");


    if(loginbutton){
        loginbutton.addEventListener("click",async()=>{
            const email=document.getElementById("login-email").value;
            const password=document.getElementById("login-password").value;
            try {
                await signInWithEmailAndPassword(auth,email,password)
                window.open("dashboard.html","blank")
                
            } catch (error) {
                document.getElementById("login-message").innerText=error.message
                
            }
        })
    }
    if(signinbutton){
        signinbutton.addEventListener("click" ,async()=>{
            const email=document.getElementById("signup-email").value;
            const password=document.getElementById("signup-password").value;
            const role=document.getElementById("role").value;
            try {
                const usercredentials=await createUserWithEmailAndPassword(auth,email,password);
                await setDoc(doc(db,"users",usercredentials.user.uid),{email,role})
                window.location.href="index.html"
                
            } catch (error) {
                document.getElementById("signup-message").innerText=error.message
                
            }
            
        })

    }
    if(logoutbutton){
        logoutbutton.addEventListener("click",async()=>{
            await signOut(auth);
            window.location.href="index.html"
        })
    }
})