import routerUser from './user'
import routerProduct from './product'
import routerCart from './cart'
import routerOrder from './order'
import routerAuth from './auth'
const initRouter =(app)=>{
  app.use('/api/user', routerUser)
  app.use('/api/product', routerProduct)
  app.use('/api/cart', routerCart)
  app.use('/api/order', routerOrder)
  app.use('/api/auth', routerAuth)
}
export default initRouter