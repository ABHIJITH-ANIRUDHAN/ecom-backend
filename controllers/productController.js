//logic to get all products from mongodb
//import products collection from model
const products=require('../models/productSchema')
exports.getallproducts=async (req,res)=>{
    //logic
    try{
 const allproducts= await products.find()//we can assign value to a variable using await function
 //send to client
 res.status(200).json(allproducts)
}catch(error){
    res.status(400).json(error)
}
}
//logic to get a particular product from mongodb
exports.viewProduct=async(req,res)=>{
    //get id of the product(from the parameter of the request)
       const id =req.params.id
    //logic
 try{   const product=await products.findOne({id})

//send product details to client
res.status(200).json(product)
}
 catch(error){res.staus(401).json(error)}
}