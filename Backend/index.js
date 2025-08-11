 

//  const isPrime = require('is-prime');

// console.log(isPrime(7));  // true
// console.log(isPrime(10)); // false
// console.log(isPrime(11));

// // const isFactorial=require('is-factorial')

// // console.log(isFactorial(11));
// function isFactorial(n) {
//   if (n === 1) return true;
//   let i = 1;
//   while (n > 1) {
//     i++;
//     n /= i;
//   }
//   return n === 1;
// }

// console.log(isFactorial(6));   
// console.log(isFactorial(24));  
// console.log(isFactorial(11));  



const express=require('express');
const app=express();

app.get("./test",(req,res)=>{
    res.send("this is the test route")
})
app.get("./home",(req,res)=>{
    res.send("this is the home route")
})
app.get("./about",(req,res)=>{
    res.send("this is the about route ")
})
app.get("./contactus",(req,res)=>{
    res.send("this is the contact us")
})

app.get("./read",(res,req)=>{

    let data=fs.readFileSync("./data.txt","uff-8")
    console.log(data)
    res.send(data)
})

app.listen(3000,()=>{
    console.log("example app listen on port 3000")
})
