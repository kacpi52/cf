import { Request, Response } from 'express'

async function isAuthApi(
  req: Request,
  res: Response,
  next: (err?: Error) => void
) {
  if (req.isAuthenticated()) {
    console.log(`auth passed`)
    return next()
  } else {
    console.log(`auth denied`)

    res.status(403).json({ errors: 'Unauthorized access.' })
  }
}

export default isAuthApi
