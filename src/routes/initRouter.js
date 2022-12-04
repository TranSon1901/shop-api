import routerUser from '../controller/user'
import routerProduct from '../controller/user'
const initRouter =(app)=>{
  app.use('/api/user', routerUser)
  app.use('/api/product', routerProduct)
}
export default initRouter