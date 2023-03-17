import { Router } from 'express'
import apiCarPostActions from 'server/actions/api/apiCarPostActions'
import apiUserActions from 'server/actions/api/apiUserActions'
import isAuthApi from 'server/middleware/isAuthApi'

const apiRouter: Router = Router()
//CARPOST
//get all carpost data
apiRouter.get('/carposts', apiCarPostActions.getAllCarPosts)
//get single carpost data
apiRouter.get('/carposts/:id', apiCarPostActions.getCarPost)
//save carpost
apiRouter.post('/carposts/add', apiCarPostActions.addCarPost)
//edit carpost
apiRouter.put('/carposts/:id/edit', isAuthApi, apiCarPostActions.editCarPost)
//delete carpost
apiRouter.delete(
  '/carposts/:id/delete',
  isAuthApi,
  apiCarPostActions.deleteCarPost
)

//USER

//get data about single user
apiRouter.get('/user/:id', apiUserActions.getSingleUser)
//register user
apiRouter.post('/user/register', apiUserActions.registerUser)
//login user
apiRouter.post('/user/login', apiUserActions.loginUser)
//logout user
apiRouter.post('user/logout', apiUserActions.logoutUser)
export default apiRouter
