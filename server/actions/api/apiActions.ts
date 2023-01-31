import { Request, Response } from 'express'
import CarPost from 'server/db/models/carpost'
class apiActionsClass {
  async getAllCarPosts(req: Request, res: Response) {
    const allPosts = await CarPost.find()
    res.status(200).json(allPosts)
  }
  async getCarPost(req: Request, res: Response) {
    const { id } = req.params
    const singleCarPost = await CarPost.findOne({ _id: id })
    res.send(singleCarPost)
    console.log(id)
  }
  async addCarPost(req: Request, res: Response) {
    const newCarPost = new CarPost({
      brand: req.body.brand,
      model: req.body.model,
      productionYear: req.body.productionYear,
      frontWheelSize: req.body.frontWheelSize,
      frontWheelWide: req.body.frontWheelWide,
      rearWheelSize: req.body.rearWheelSize,
      rearWheelWide: req.body.rearWheelWide,
      isCustomBody: req.body.isCustomBody,
      kindOfBody: req.body.kindOfBody,
      isStockSuspension: req.body.isStockSuspension,
      kindOfSuspension: req.body.kindOfSuspension,
    })
    try {
      await newCarPost.save()
      res.status(201).json(newCarPost)
    } catch (error: any) {
      // jaki typ do errorow z try catcha  ?
      res.status(422).json({ errors: error.errors })
    }
  }
  async editCarPost(req: Request, res: Response) {
    const { id } = req.params
    const editData = req.body
    const editCarPost = await CarPost.replaceOne({ _id: id }, editData) // sprawdz czy sam zapis _id i co z tym typem
    res.send(editCarPost)
    console.log(editData)
  }
  async deleteCarPost(req: Request, res: Response) {
    const id = req.params.id
  }
}

const apiActions: apiActionsClass = new apiActionsClass()
export default apiActions
