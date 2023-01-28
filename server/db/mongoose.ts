import mongoose from 'mongoose'
import { database } from 'server/config'

mongoose.connect(database)
