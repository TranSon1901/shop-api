import mongoose from "mongoose";   

const cartSchema= new mongoose.Schema(
{
    userID: { type:String , require:true },
    products:[
    {
        productID:{
            type:String,
        },
        quantity:{
            type:Number,
            default:1,
        }
    }]
},{ timestamps:true}
)
export default mongoose.model('cart',cartSchema)