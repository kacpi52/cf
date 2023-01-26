import dotenv from 'dotenv'
dotenv.config()

const port = process.env.SERVER_PORT || 3010
const database = process.env.DATABASE
const sessionKeySecret = process.env.SESSION_KEY_SECRET

export { port, database, sessionKeySecret }
