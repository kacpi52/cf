import { Request, Response } from 'express'
import { Types } from 'mongoose'
import CarPost from 'server/db/models/carpost'

class apiCarPostActionsClass {
  async getAllCarPosts(req: Request, res: Response) {
    const allPosts = await CarPost.find()
    res.status(200).json(allPosts)
  }
  async getCarPost(req: Request, res: Response) {
    const singleCarPost = await CarPost.findOne({
      _id: new Types.ObjectId(req.params.id),
    })
    res.json(singleCarPost)
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
      res.status(500).json({ errors: error.errors }) // dopytac co z ta oblusga bledow i przeniesieniem na fr
    }
  }
  async editCarPost(req: Request, res: Response) {
    const editData = req.body
    const editCarPost = await CarPost.findOneAndUpdate(
      { _id: new Types.ObjectId(req.params.id) },
      editData
    ).exec()
    console.log(editCarPost)
    res.status(200).json(editCarPost)
  }
  async deleteCarPost(req: Request, res: Response) {
    await CarPost.deleteOne({ _id: new Types.ObjectId(req.params.id) })
    res.status(202)
  }
}

const apiCarPostActions: apiCarPostActionsClass = new apiCarPostActionsClass()
export default apiCarPostActions
