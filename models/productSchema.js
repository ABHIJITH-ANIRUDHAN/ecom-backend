//define schema for product
//import mongoose
const mongoose=require('mongoose')
//using mongoose define schema
const productSchema=mongoose.Schema({
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
    description:{
        type:String,
        required:true
    },  
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        rate:{
            type:Number,
            required:true
        },
        count:{
            type:Number,
            required:true
        }
    }
})
//create model using the above schema
const products=mongoose.model("products",productSchema)
module.exports=products