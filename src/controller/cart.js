import Cart from "../models/Cart";

//GET ALL CART 
const getAllCart = async (req,res,next)=>{
    try{
        const carts= await Cart.find()
        res.status(200).json(products)
    }catch(err){
        next(err)
    }
}
//GET CART
const getCart= async (req,res,next)=>{
    try{
        const cart = await Cart.findById(req.params.id)
        res.status(200).json(product)
    }catch(err){
        next(err)
    }
}
//CREATE CART
const createCart= async (req,res,next)=>{
    try{
        const newCart = new Cart(req.body)
        const saveCart= await newCart.save()
        res.status(200).json(saveCart)
    }catch(err){
        next(err)
    }
}
//Update CARt
const updateCart = async (req,res,next)=>{
    try{
       const updateCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {$set : req.body},
        {new:true})
        res.status(200).json(updateCart)
    } catch(err){
      next(err)
    }
} 
//DELETE CART
const deleteCart = async (req,res,next)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("cart have delete")
    }catch(err){
        next(err)
    }
}
////GET USER CART
const getUserCart= async (req,res,next)=>{
    try{
        const cart= Cart.findOne({userID:req.params.userID})
    }catch(err){
        next(err)
    }
}

export {getAllCart,getCart,getUserCart,deleteCart,updateCart,createCart}