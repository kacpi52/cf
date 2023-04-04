import { Schema, model } from 'mongoose'
import { validateEmail } from '../validators/validators'
import bcrypt from 'bcrypt'
import { userInterface } from 'src/typings/sharedInterfaces'
import randomstring from 'randomstring'

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
  isAdmin: { type: Boolean, default: false },
  apiToken: String,
})

//dodawanie tokenu
userSchema.pre('save', function (next: (err?: Error) => void) {
  const user = this
  if (user.isNew) {
    user.apiToken = randomstring.generate(60)
  }
  next()
})

//hashowanie hasla
userSchema.pre('save', async function (next: (err?: Error) => void) {
  const user = this
  try {
    if (user.password && user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 10)
    }
    next()
  } catch (error: any) {
    next(error)
  }
})

userSchema.post(
  // tez do przejrzenia bo to z tymi typami to jest loteria
  'save',
  function (error: any, doc: any, next: (err?: Error) => void) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
      next(new Error('There was a duplicate key error'))
    } else {
      next()
    }
  }
)

userSchema.methods = {
  comparePassword(password: string): boolean {
    const user = this
    return bcrypt.compareSync(password, user.password)
  },
}

const User = model<userInterface>('User', userSchema)

export default User
