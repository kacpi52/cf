import dotenv from 'dotenv'
dotenv.config()

const port = process.env.SERVER_PORT || 3010
const database: string = process.env.DATABASE || 'mongodb://localhost:27017/cf'
const sessionName: string = process.env.SESS_NAME || 'sid'
const sessionKeySecret: string =
  process.env.SESS_SECRET || 'sessionsecretkey10101'

export { port, database, sessionName, sessionKeySecret }
