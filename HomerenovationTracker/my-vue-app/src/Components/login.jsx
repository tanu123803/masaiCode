import React from "react";
import {useState} from "react";
import {useDispatch,useSelector } from "react-redux";
import "./Signup.css";
import { loginUser } from "../features/auth/authSlice";

function LoginUser(){
    const dispatch=useDispatch();
    const{user,loading,error}=useSelector((state)=>state.auth);
    const[email,setEmail]=useState(" ");
    const[password,setPassword]=useState("");
    const[formError,setFormError]=useState("");

    const handleSubmit=(e)=>{
        e.preventdefault();
        if(!email||!password){
            setFormError("plese fill out all the fields")
        }
        if(password.length<6){
            setFormError("please enter atlest 6 digit character")
        }
        setFormError("");
        dispatch(loginUser({email,password}))
    };
    return(
        <>
        <div>
           <img src="https://dcassetcdn.com/design_img/93336/67595/67595_1472558_93336_image.jpg" alt="" />
        </div>
        <h1>login for Homerenovation</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onchange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onchange={(e)=>setPassword(e.target.value)}/>

            {formError&&(<div>{formError}</div>)}
            {error&&(<div>{error}</div>)}
            <button type="submit" disabled={loading}>{loading ? "login.....":"login "}</button>
        </form>
        </>
    )

}
export default LoginUser;
