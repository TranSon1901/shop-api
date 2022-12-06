import express from 'express'
import { getAllCart,getCart,getUserCart,deleteCart,updateCart,createCart } from '../controller/cart'

const router= express.Router()

router.get('/', getAllCart)
router.post('/:id', getCart)
router.post('/', createCart)
router.put('/:id', updateCart)
router.get('/:id', deleteCart)
router.get('/', getAllCart)

export default router