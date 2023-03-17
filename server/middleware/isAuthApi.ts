import { Request, Response } from 'express'

async function isAuthApi(
  req: Request,
  res: Response,
  next: (err?: Error) => void
) {
  const sessionAuth = req.session.user
  if (!sessionAuth) return res.status(403)
  if (sessionAuth) {
    res.status(201)
  }

  next()
}

export default isAuthApi
