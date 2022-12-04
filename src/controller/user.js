import express from 'express'
const router= express.Router()

router.get('/',(req,res,next)=>{
    return res.send('Users')
})

export default router