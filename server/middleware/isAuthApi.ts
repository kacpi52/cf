import { Request, Response } from 'express'
import User from 'server/db/models/user'

async function isAuthApi(
  req: Request,
  res: Response,
  next: (err?: Error) => void
) {
  const token = req.headers.authorization
  if (!token) {
    return res.status(403)
  }

  const user = await User.findOne({ apiToken: token })
  if (!user) {
    // i co dalej tu zrobic z ta autoryzacja tokenowa,
    return res.status(403)
  }
  next()
}

export default isAuthApi
