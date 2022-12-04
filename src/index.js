import express from 'express'
import dotenv from 'dotenv'
import initRouter from './routes/initRouter'
import connet from './config/connetDB'
import cookieParser from 'cookie-parser'
const app=express()

dotenv.config()

const PORT = process.env.PORT
app.use(cookieParser())
app.use(express.json())
connet()

initRouter(app)

app.use((err,req,res,next)=>{
     const errorStatus=err.status||500
     const errorMessage=err.message || 'something went wrong!'
     return res.status(errorStatus).json({
         success:false,
         status:errorStatus,
         message:errorMessage,
         stack:err.stack
     })
 })

app.listen(PORT || 5000 ,()=>{
     console.log(`connet back-end http://localhost:${PORT}`)
})