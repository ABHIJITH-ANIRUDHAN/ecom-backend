//logic to get all wishlist from mongodb
//import wishlist collection from model
const wishlists = require('../models/wishlistSchema')
const products=require('../models/wishlistSchema')
//logic to add item to wishlist
exports.addToWishlist=async (req,res)=>{
    //logic

        //destructing
//get product details from req body
const {id,title,price,image}=req.body
        //check product already in wishlist
        try{
        const item= await wishlists.findOne({id})
        if(item){
            //product is available
            res.status(401).json('Product is already present in your wishlist')
        }
        else{
            //product is not available so add it
            const newProduct=new wishlists({
                id,title,price,image
            })
           //save to db
            await newProduct.save()
            res.status(200).json('Item added to your wishlist')
        }
}catch(error){
    res.status(400).json(error)
}
}
//get all items in wishlist
exports.getAllWishlistItems=async (req,res)=>{
    //logic
    try{
    //to gett all items from an collection
    const allItems=await wishlists.find()
    if(allItems){
        res.status(200).json(allItems)
    }
    else{
        res.status(401).json("Your wishlist is Empty!!!!")
    }
}catch(error){
    res.status(401).json(error)
}
}
//remove item from wishlist
exports.removeWishlistItem=async(req,res)=>{
    //logic
    //get product id from req url
    const id=req.params.id
    //check id is in collection
    try{
        const item=await wishlists.deleteOne({id})
        if(item){
            //get remaining items other than deleted one
           const allItems=await wishlists.find()
           res.status(200).json(allItems)
        }else{
            res.status(401).json("Item is not in the wishlist")
        }
    }catch(error){
        res.status(401).json(error)
    }
}
