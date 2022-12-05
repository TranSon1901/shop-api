import express from 'express'
import { getAllUser,getUser, deleteUser, updateUser,userStart } from '../controller/user'
import { verifyAdmin, verifyUser, verifyToken } from '../utils/verifyToken'
const router= express.Router()

//USER START
router.get('/start',verifyAdmin, userStart)
//GET ALL USER
router.get('/',verifyAdmin, getAllUser)
//GET USER 
router.get('/:id',verifyUser,getUser)
//DELETE USER
router.delete('/:id',verifyUser , deleteUser)
//UPDATE USER
router.put('/:id' , verifyUser , updateUser)
export default router