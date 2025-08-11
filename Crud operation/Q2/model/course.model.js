//here we need to keep db intraction only 
const fs= require("fs");
const getdata=()=>{
    let data= JSON.parse(fs.readFileSync("./db.json","utf-8"))
    let courses=data.courses

    return{data,courses}

}

const addorUpdatedata=(data)=>{
    fs.writeFileSync("./db.json",JSON.stringify(data))

}
module.exports={getdata,addorUpdatedata}