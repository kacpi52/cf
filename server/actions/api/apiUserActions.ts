import { Request, Response } from 'express'
import { Types } from 'mongoose'
import bcrypt from 'bcrypt'
import User from 'server/db/models/user'
import { sessionName } from 'server/config'

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
      const isValidPassword = bcrypt.compareSync(
        req.body.password,
        user.password
      )
      if (isValidPassword) {
        const { login } = user
        const userId = user._id.toString()
        req.session.user = { userId, login }

        res.status(200).json(req.session.user) // do uwierzytelniania  tokenem tylko co dalej z nim
      } else {
        throw new Error('bad password')
      }
    } catch (error) {
      return res.status(401).json({ message: 'Invalid login or password.' })
    }
  }
  logoutUser(req: Request, res: Response) {
    try {
      if (req.session.user) {
        res.clearCookie(sessionName)
        res.status(200)
      }
    } catch (error: any) {
      res.status(422).json({ errors: error.errors })
    }
  }
}

const apiUserActions: apiUserActionsClass = new apiUserActionsClass()
export default apiUserActions
