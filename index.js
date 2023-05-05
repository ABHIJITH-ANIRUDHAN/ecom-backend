require('dotenv').config()//Loads .env file contents into process.env (not assigned because not using anywhere)
const express=require('express')
const cors=require('cors')
//import connection.jsfunction
require('./db/connection.js')
//import router
const router=require('./routes/router.js')
//create server app using express
const server=express()
//use cors and express.json() to your project
//application specific middleware
server.use(cors())
server.use(express.json())
//use router in server
server.use(router)
//create port to listen your server app
const PORT =process.env.PORT||3000
//api test
server.get('/',(req,res)=>{
    res.status(200).json("E com server started")
})
server.listen(PORT,()=>{
    console.log(`E com server started at port: ${PORT}`);
})