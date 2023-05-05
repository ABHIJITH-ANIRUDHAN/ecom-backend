//import express
const express=require('express')
//import productControllers
const productControllers=require('../controllers/productController')
//import wishlistControllers
const wishlistControllers=require('../controllers/wishlistController')
//import cartControllers
const cartController=require('../controllers/cartController')
//Router()
const router=new express.Router()
//get all products
//router.http-request(path,callback to define logic to resolve api)
router.get('/products/get-all-products',productControllers.getallproducts)
//router for view single product details
router.get('/products/:id',productControllers.viewProduct)
//router for add to wishlist
router.post('/products/add-to-wishlist',wishlistControllers.addToWishlist)
//router to get all wishlist items
router.get('/wishlist/get-all-items',wishlistControllers.getAllWishlistItems)
//router for removing an item from wishlist
router.delete('/wishlist/remove-item/:id',wishlistControllers.removeWishlistItem)
//router for adding item to cart
router.post('/products/add-to-cart',cartController.addToCart)
//router for get all cart items
router.get('/cart/get-all-items',cartController.getCartItems)
router.delete('/cart/item/:id',cartController.removeCartItem)
//router for incrementing cart item quantity
router.get('/cart/increment-item/:id',cartController.incrCartItem)
//router for decrementing cart item quantity
router.get('/cart/decrement-item/:id',cartController.decrCartItem)
//router for empty cart
router.delete('/cart/empty-cart',cartController.emptyCart)
//ecport router
module.exports=router