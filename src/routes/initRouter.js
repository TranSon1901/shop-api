import routerUser from './user'
import routerProduct from './product'
import routerCart from './cart'
import routerOrder from './order'
import routerAuth from './auth'
const initRouter =(app)=>{
  app.use('/api/users', routerUser)
  app.use('/api/products', routerProduct)
  app.use('/api/carts', routerCart)
  app.use('/api/order', routerOrder)
  app.use('/api/auth', routerAuth)
}
export default initRouter