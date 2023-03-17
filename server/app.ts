import express, { Express } from 'express'
import bodyParser from 'body-parser'
import apiRouter from './routes/apiRouter'
import session from 'express-session'
import connectStore from 'connect-mongo'
import cors from 'cors'
import { database, sessionKeySecret, sessionName } from './config'

const app: Express = express()
//init db
require('./db/mongoose') // moze poprawic na es2018 import itd
//middleware session, public, body parser
app.use(express.urlencoded({ extended: true })) // to chyba niepotrzebnie wogole bo nie bede tak wysylal
app.use(bodyParser.json())
app.use(cors())
app.use(
  session({
    name: sessionName,
    secret: sessionKeySecret,
    saveUninitialized: false,
    resave: false,
    store: connectStore.create({
      mongoUrl: database,
      collectionName: 'session',
      ttl: 60 * 60 * 24,
    }),
    cookie: { sameSite: true, maxAge: 1000 * 60 * 60 * 24 },
  })
)
declare module 'express-session' {
  interface SessionData {
    user: { userId: string; login: string }
  }
}

//mount routes
app.use(apiRouter)
export default app
