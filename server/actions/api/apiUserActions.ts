import { Request, Response } from 'express'
import { Types } from 'mongoose'
import bcrypt from 'bcrypt'
import User from 'server/db/models/user'
import { sessionName } from 'server/config'
import passport from 'passport'
import { userInterface } from 'src/typings/sharedInterfaces'

class apiUserActionsClass {
  // get users data
  async getSingleUser(req: Request, res: Response) {
    const singleUser = await User.findOne({
      _id: new Types.ObjectId(req.params.id),
    })
    res.json(singleUser)
  }
  //register new user
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

  // login user using passport
  loginUser(req: Request, res: Response, next: (err?: Error) => void) {
    passport.authenticate(
      'local',
      (err: any, user: userInterface, info: any) => {
        //errors
        if (err) return res.status(400).json({ errors: err })
        if (!user) return res.status(400).json({ errors: 'No user found ep' })
        //  login
        req.logIn(user, (err) => {
          if (err) {
            return res.status(400).json({ errors: err })
          }
          return res
            .status(200)
            .json({
              message: `logged in as ${
                user.login
              } auth ${req.isAuthenticated()}`,
            })
        })
      }
    )(req, res, next)
  }

  logoutUser(req: Request, res: Response) {
    req.logout((err) => {
      if (err) return res.status(400).json({ errors: 'Error during logout' })
    })
  }
}

const apiUserActions: apiUserActionsClass = new apiUserActionsClass()
export default apiUserActions
