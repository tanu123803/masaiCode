const express = require("express");
const fs = require("fs");
const app = express();


app.use(express.json())
 

function readData() {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
}


//CRUD OPERATION 

app.get("/dishes",(req,res)=>{
    res.status(200).json({message:"all the req are coming"})
})

app.get("/dishes/:id",(req,res)=>{
    res.status(200).json({message:"all the dsihes are getting by id"})
})
app.post("/dishes/:id",(req,res)=>{
    let dishes = readData();
    const newDish = req.body;
    newDish.id = dishes.length ? dishes[dishes.length - 1].id + 1 : 1;
     dishes.push(newDish);
     writeData(dishes);
     res.status(201).json(newDish)
});

app.put("/dishes/:id", (req, res) => {
  let dishes = readData();
  const index = dishes.findIndex(d => d.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Dish not found" });

  dishes[index] = { ...dishes[index], ...req.body };
  writeData(dishes);
  res.json(dishes[index]);
}); 

app.delete("/delete",(req,res)=>{
    res.json({message:"all the dsihes are deleted"})
})




app.use("/",(req,res)=>{
    res.status(404).json({message:"404 route is not found"})
})

app.listen(3000,()=>{
    console.log("server is running on the port 3000")
})