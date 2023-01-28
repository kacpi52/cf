import express, { Express, Request, Response } from 'express'
const app: Express = express()

//init db
require('./db/mongoose') // moze poprawic na es2018 import itd
//middleware session, public, body parser
app.use(express.urlencoded({ extended: true }))
//mount routes

export default app
