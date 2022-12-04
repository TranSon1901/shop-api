import User from "../models/User"

//get All users 
const getAllUser = async (req,res,next)=>{
    try{
      const user = await User.find()
      res.status(200).json(user)
    } catch(err){
      next(err)
    }
} 
//get user
const getUser = async (req,res,next)=>{
    try{
      const user = await User.findById(req.params.id)
      res.status(200).json(user)
    } catch(err){
      next(err)
    }
} 
const deleteUser = async (req,res)=>{
  try{
     await User.findByIdAndDelete(req.params.id)
     res.status(200).json('delete user')
  } catch(err){
    next(err)
  }
} 
const updateUser = async (req,res)=>{
  try{
     const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {$set : req.body},
      {new:true})
      res.status(200).json(updateUser)
  } catch(err){
    next(err)
  }
} 
export {getAllUser, getUser,updateUser,deleteUser}