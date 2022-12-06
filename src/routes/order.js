import express from 'express'
import  {getAllOrder,getUserOder,deleteOrder,updateOrder,createOrder, getIncome} from '../controller/order'
const router= express.Router()

router.get('/find/:userId', getUserOder)
router.get('/', getAllOrder)
router.get('/income', getIncome)
router.delete('/:id', deleteOrder)
router.post('/', createOrder)
router.put('/', updateOrder)

export default router