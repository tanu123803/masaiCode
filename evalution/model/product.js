
const mangoose=require("mongoose");
const productSchema=new mongoose.schema({
    ProductNmae:string,
    category:string,
    price:Number,
    inStock:true,
    quantity:Number
    
});

module.export= mongoose.model("product",productSchema)