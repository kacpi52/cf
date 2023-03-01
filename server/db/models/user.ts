import { Schema, model } from 'mongoose'
import { validateEmail } from '../validators/validators'

interface userInterface {
  login: string
  email: string
  password: string
  isAdmin: boolean
}

const userSchema = new Schema<userInterface>({
  login: {
    type: String,
    required: [true, 'Login is required.'],
    lowercase: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    lowercase: true,
    trim: true,
    unique: true,
    validate: [validateEmail, 'Wrong email.'],
  },
  password: {
    type: String,
    required: true,
    minlength: [4, 'Password has to be longer than 4 characters.'],
  },
  isAdmin: { type: Boolean },
})

const User = model<userInterface>('User', userSchema)

export default User
