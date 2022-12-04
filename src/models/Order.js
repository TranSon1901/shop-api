import mongoose from "mongoose";    

const orderSchema= new mongoose.Schema(
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
    }],
    amount: { type:Number, require:true},
    address:{ type:Object, require:true},
    status:{type: String,default:"pendin"}
}
,{ timestamps:true})
export default mongoose.model('order',orderSchema)