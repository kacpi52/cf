import { Router } from 'express'
import apiActions from 'server/actions/api/apiActions'

const apiRouter: Router = Router()

//pobieranie wszystkich carpostow
apiRouter.get('/carposts', apiActions.getAllCarPosts)
//pobieranie konretnego carposta
apiRouter.get('/carposts/:id', apiActions.getCarPost)
//zapisywanie carposta
apiRouter.post('/carposts/add', apiActions.addCarPost)
//edytowanie
apiRouter.put('/carposts/:id/edit', apiActions.editCarPost)
//usuwanie
apiRouter.delete('/carposts/:id/delete', apiActions.deleteCarPost)

export default apiRouter
