import { Router } from 'express'
import apiCarPostActions from 'server/actions/api/apiCarPostActions'
import apiUserActions from 'server/actions/api/apiUserActions'
import isAuthApi from 'server/middleware/isAuthApi'

const apiRouter: Router = Router()
//CARPOST
//pobieranie wszystkich carpostow
apiRouter.get('/carposts', apiCarPostActions.getAllCarPosts)
//pobieranie konretnego carposta
apiRouter.get('/carposts/:id', apiCarPostActions.getCarPost)
//zapisywanie carposta
apiRouter.post('/carposts/add', apiCarPostActions.addCarPost)
//edytowanie
apiRouter.put('/carposts/:id/edit', isAuthApi, apiCarPostActions.editCarPost)
//usuwanie
apiRouter.delete(
  '/carposts/:id/delete',
  isAuthApi,
  apiCarPostActions.deleteCarPost
)

//USER

//pobieranie konkretnego uzytkownika
apiRouter.get('/user/:id', apiUserActions.getSingleUser)
//rejestracja uzytkownika
apiRouter.post('/user/register', apiUserActions.registerUser)
//logowanie uzytkownika
apiRouter.post('/user/login', apiUserActions.loginUser)

export default apiRouter
