const mongoose = require("mongoose");

//establish a connection with mongoDb
 const connectToDb = async()=>{
    try {
         await mongoose.connect('mongodb://127.0.0.1:27017/backendtest');
         //backend test is a database
        console.log("connect To Db")
        
    } catch (error) {
        console.log("error in connecting db");
        console.log("err")
        
    }
}
connectToDb();

const userSchema = new mongoose.Schema({
    name:String,
    age :Number,
    location :String,
    isMarried : Boolean
})
// schema helps to maintain a structure
//model is responsible to iintract with Db
//model is constructor which connect collection and Schema 
const UserModel = mongoose.model ("User" ,userSchema);
//method 1 for create
//make a typical intraction with db
UserModel.create({name:"tanu chaturvedi",age:23,isMarried:"false",location:"delhi"}).then(()=>{
    console.log("data is added in the databse under collection user in databse backendtest")
})

///method 2  new ---save();
let newuser = new UserModel({name:"naitik chaturvedi",age:23,isMarried:"false",location:"delhi"});
newuser.save().then(()=>{
    console.log("data added in database under collection User in database backendtest")
}).catch((err)=>{
    console.log("error in inseritng the code",err)

})

let user = UserModel.find();
console.log(user)

 user.then((data)=>{
    console.log(data)
 }).catch((err)=>{
    console.log("error is getting in the data")
 })

let updateuser= UserModel.findByIdAndDelete('689661e0f15c7e5029c82cb8',{name:"Alice chalokiii"},{ new: true });
updateuser.then(()=>{
    console.log("data has been updated successfully")
}).catch((err)=>{
    console.log("error",err)
})
