//define connection between node and mongodb using 
//import mangoose
const mongoose=require('mongoose')
//get connection string from env
const DB=process.env.DATABASE
//connect mongodb
//to avoid warning useUnifiedTopology and useaNewUrlParser makes true  and give it as object to function parameter)
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
console.log('Cart Database Conncect Successfully')
}).catch((error)=>{
    console.log(error);
})