import { Request, Response } from 'express'
import { Types } from 'mongoose'
import User from 'server/db/models/user'

class apiUserActionsClass {
  async getSingleUser(req: Request, res: Response) {
    const singleUser = await User.findOne({
      _id: new Types.ObjectId(req.params.id),
    })
    res.json(singleUser)
  }
  async registerUser(req: Request, res: Response) {
    const newUser = new User({
      login: req.body.login,
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin,
    })
    try {
      await newUser.save()
      res.status(201).json(newUser)
    } catch (error: any) {
      res.status(500).json({ errors: error.errors })
    }
  }
  async loginUser(req: Request, res: Response) {
    try {
      const user = await User.findOne({ login: req.body.login })
      if (!user) {
        throw new Error('user not found')
      }
      const isValidPassword = true //user.comparePassword(req.body.password)
      if (!isValidPassword) {
        throw new Error('password not valid')
      }
      res.status(200).json({ apiToken: user.apiToken }) // do uwierzytelniania  tokenem tylko co dalej z nim
    } catch (error) {
      return res.status(401).json({ message: 'Invalid login or password.' })
    }
  }
}

const apiUserActions: apiUserActionsClass = new apiUserActionsClass()
export default apiUserActions
