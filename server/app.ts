import express, { Express } from 'express'
import bodyParser from 'body-parser'
import apiRouter from './routes/apiRouter'
import session from 'express-session'
import connectStore from 'connect-mongo'
import cors from 'cors'
import { database, sessionKeySecret, sessionName } from './config'
import passport from 'passport'
import './passport/passportSetup'
//db init
import './db/mongoose'

const app: Express = express()

//middleware session, public, body parser
app.use(express.urlencoded({ extended: true })) // to chyba niepotrzebnie wogole bo nie bede tak wysylal
app.use(bodyParser.json())
app.use(cors())
app.use(
  session({
    name: sessionName,
    secret: sessionKeySecret,
    saveUninitialized: true,
    resave: false,
    store: connectStore.create({
      mongoUrl: database,
      collectionName: 'session',
      ttl: 60 * 60 * 24,
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24, secure: false },
  })
)
app.use(passport.initialize())
app.use(passport.session())

//mount routes
app.use(apiRouter)

export default app
