//logic to get all products from mongodb
//import cart collection from model
const cartitems=require('../models/cartSchema')
//to add item to cart
exports.addToCart=async(req,res)=>{
    //details comming from post request body
 const{id,title,image,price,quantity}=req.body
 //logic
 try{
//check product is already in cart
const product=await cartitems.findOne({id})
if(product){
    //product already in cart
    //increment quantity
    product.quantity+=1
    //update total price from the prduct
    product.grandTotal=product.price*product.quantity
    //to save changes in mongodb
    await product.save()
    //send res to client
    res.status(200).json("Items added to your cart...")
}else{
    //product is not in the cart
    //add product to cart collection
    const newProduct=new cartitems({
        id,title,price,image,quantity,grandTotal:price
    })//order is important what order shema defined that order follows here
   await newProduct.save()
   //send res to client
   res.status(200).json("item added to your cart ...")
}
 }
 catch(error){
    res.status(401).json(error)
 }
}
//getCartItems
exports.getCartItems=async(req,res)=>{
    //logic
    try{
        const allItems=await cartitems.find()
        //send allproducts to client
        res.status(200).json(allItems)
    }
    catch(error){
        res.status(401).json(error)
    }
}
//removeItem from cart
exports.removeCartItem=async(req,res)=>{
    //get id of product should be removed
    const {id}=req.params
      //logic
    try{
        const removeItem=await cartitems.deleteOne({id})
        if(this.removeCartItem){
            //get remaining items other than deleted one form cart
            const allItems=await cartitems.find()
            res.status(200).json(allItems)
        }
        else{
            res.status(404).json("Item not in your cart")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}
//increment cart item
exports.incrCartItem=async(req,res)=>{
    const {id}=req.params
    try{
        const item=await cartitems.findOne({id})
        if(item){
            item.quantity+=1;
            item.grandTotal=item.price*item.quantity
            await item.save()
            //get all items from cart
            const allItems=await cartitems.find()
            res.status(200).json(allItems)
        }else{
            res.status(400).json("item is not in the cart")
        }
    }
    catch(error){
        res.status(401).json("Item not in the cart")
    }
}
//decrement quantity
exports.decrCartItem=async(req,res)=>{
    const {id}=req.params
    try{
        const item=await cartitems.findOne({id})
        if(item){
            item.quantity-=1;
            if(item.quantity==0){
                const deleteItem=await cartitems.deleteOne({id})
                //get all items from cart
                const allItems=await cartitems.find()
                 res.status(200).json(allItems)
            }
           else{
            item.grandTotal=item.price*item.quantity
            await item.save()
            //get all items from cart
            const allItems=await cartitems.find()
            res.status(200).json(allItems)
           }
        }else{
            res.status(404).json("item is not in the cart")
        }
    }
    catch(error){
        res.status(401).json("error")
    }
}
//empty cart
exports.emptyCart=async(req,res)=>{
    try{
        const result=await cartitems.deletemany({})
        res.status(200).json("Your cart is empty")
    }catch(error){
        res.status('error')
    }
}