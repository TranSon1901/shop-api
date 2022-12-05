import Product from '../models/Product'

//GET ALL PRODUCT
const getAllProducts = async (req,res,next)=>{
    try{
        const products= await Product.find()
        res.status(200).json(products)
    }catch(err){
        next(err)
    }
}
//GET PRODUCT 
const getProduct= async (req,res,next)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }catch(err){
        next(err)
    }
}

// CREAT PRODUCT
const createProduct= async (req,res,next)=>{
    try{
        const newProduct= new Product(req.body)
        const saveProduct= await newProduct.save()
        res.status(200).json(saveProduct)
    }catch(err){
        next(err)
    }
}
//UPDate Product
const updateProduct = async (req,res,next)=>{
    try{
       const updateProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {$set : req.body},
        {new:true})
        res.status(200).json(updateProduct)
    } catch(err){
      next(err)
    }
} 
//DELETE PRODUCT
const deleteProduct = async (req,res,next)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("product have delete")
    }catch(err){
        next(err)
    }
}
export {createProduct,updateProduct,deleteProduct,getAllProducts,getProduct}