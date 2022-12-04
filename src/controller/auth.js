import User from "../models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createError } from "../utils/error";
const register= async (req,res,next) =>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
       const newUser= User({
        ...req.body,
        password:hash
       })
       await newUser.save()
       res.status(200).json('create user succesfull')

    }catch(error){
        next(error)
    }
}

export {register}