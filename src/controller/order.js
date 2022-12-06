import Order from '../models/Order'

//CREATE
const createOrder= async (req, res ,next) => {
    try {
      const newOrder = new Order(req.body)
      const savedOrder = await newOrder.save()
      res.status(200).json(savedOrder)
    } catch (err) {
      next(err)
    }
}
//UPDATE
const updateOrder= async (req, res ,next) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrder)
    } catch (err) {
        next(err)
    }
}
//DELETE
const deleteOrder=  async (req, res,next) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("Order has been deleted...");
    } catch (err) {
      next(err)
    }
  }
//GET ALL ORDER
const getAllOrder = async (req,res,next)=>{
    try{
        const orders= await Order.find()
        res.status(200).json(orders)
    }catch(err){
        next(err)
    }
}
//GET USER ORDER
const getUserOder = async (req,res,next)=>{
    try{
        const Oders= await Order.find({userID:req.params.userID})
        res.status(200).json(orders);
    }catch(err){
        next(err)
    }
}
// GET MONTHLY INCOME
const getIncome = async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income)
  } catch (err) {
    next(err)
  }
}
export {getAllOrder,getUserOder,deleteOrder,updateOrder,createOrder,getIncome}
