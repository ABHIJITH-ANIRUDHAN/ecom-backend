//define schema for wishlist
//import mongoose
const mongoose=require('mongoose')
//using mongoose define schema
const wishlistSchema=mongoose.Schema({
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
    }
    
})
//create model using the above schema
const wishlists=mongoose.model("whishlists",wishlistSchema)
module.exports=wishlists