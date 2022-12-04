import express from 'express'
import dotenv from 'dotenv'
import initRouter from './routes/initRouter'
import connet from './config/connetDB'
const app=express()

dotenv.config()

const PORT = process.env.PORT

connet()
initRouter(app)

app.listen(PORT || 5000 ,()=>{
     console.log(`connet back-end http://localhost:${PORT}`)
})