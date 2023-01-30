import express, { Express } from 'express'
import bodyParser from 'body-parser'
import apiRouter from './routes/apiRouter'
const app: Express = express()

//init db
require('./db/mongoose') // moze poprawic na es2018 import itd
//middleware session, public, body parser
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
//mount routes
app.use(apiRouter)
export default app
