import { Request, Response } from 'express'
import CarPost from 'server/db/models/carpost'
class apiActionsClass {
  async getAllCarPosts(req: Request, res: Response) {
    const allPosts = await CarPost.find({})
    res.json(allPosts)
  }
  getCarPost(req: Request, res: Response) {
    const id = req.params.id
    res.send(`notka o id ${id}`)
  }
  addCarPost(req: Request, res: Response) {}
  editCarPost(req: Request, res: Response) {
    const id = req.params.id
  }
  deleteCarPost(req: Request, res: Response) {
    const id = req.params.id
  }
}

const apiActions: apiActionsClass = new apiActionsClass()
export default apiActions
