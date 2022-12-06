import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controller/product'
import { verifyAdmin, verifyUser } from '../utils/verifyToken'
const router= express.Router()

router.get('/',getAllProducts)
router.get('/:id',getProduct)
router.post('/',verifyAdmin, createProduct)
router.put('/:id',verifyAdmin, updateProduct)
router.delete('/:id',verifyAdmin,deleteProduct)

export default router