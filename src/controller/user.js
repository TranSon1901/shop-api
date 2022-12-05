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
//DELETE USER
const deleteUser = async (req,res,next)=>{
  try{
     await User.findByIdAndDelete(req.params.id)
     res.status(200).json('delete user')
  } catch(err){
    next(err)
  }
} 
// UPDATE USER
const updateUser = async (req,res,next)=>{
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
//USER START
const userStart = async (req,res,next)=>{
  const date= new Date()
  const lastYear= new Date(date.setFullYear(date.getFullYear()-1))
  try{
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  }catch(err){
    next(err)
  }
}
export {getAllUser, getUser,updateUser,deleteUser,userStart}