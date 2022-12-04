import express from 'express'
import { getAllUser,getUser, deleteUser, updateUser } from '../controller/user'
import { verifyAdmin, verifyUser, verifyToken } from '../utils/verifyToken'
const router= express.Router()

//GET ALL USER
router.get('/',verifyAdmin, getAllUser)
//GET USER 
router.get('/:id',verifyUser,getUser)
//DELETE USER
router.delete('/:id',verifyUser , deleteUser)
//UPDATE USER
router.put('/:id' , verifyUser , updateUser)

export default router