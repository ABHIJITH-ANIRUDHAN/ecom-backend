//define schema for cart
//import mongoose
const mongoose=require('mongoose')
//using mongoose define schema
const cartSchema=mongoose.Schema({
    id:{
        type:Number,
        required:true,//id is required so that in mongodb we declare required as true
        unique:true//id should be uniq1ue so that we declaare it as unique
    },
    title:{
        type:String,
        required:true
    }, 
     price:{
        type:Number,
        required:true
    },
    
    image:{
        type:String,
        required:true
    }, 
    quantity:{
       type:Number,
       required:true
   }, 
   grandTotal:{
      type:Number,
      required:true
  }
    
})
//create model using the above schema
const cartitems=mongoose.model("cartitems",cartSchema)
module.exports=cartitems