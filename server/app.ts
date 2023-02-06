import express, { Express } from 'express'
import bodyParser from 'body-parser'
import apiRouter from './routes/apiRouter'
import cors from 'cors'
const app: Express = express()

//init db
require('./db/mongoose') // moze poprawic na es2018 import itd
//middleware session, public, body parser
app.use(express.urlencoded({ extended: true })) // to chyba niepotrzebnie wogole bo nie bede tak wysylal
app.use(bodyParser.json())
app.use(cors())
//app.use(express.json())  czy ten bodyparser jest tu potrzebny skoro moge tego parsera expressowego uzyc ?
//mount routes
app.use(apiRouter)
export default app
