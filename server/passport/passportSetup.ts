import User from 'server/db/models/user'
import passport from 'passport'
import bcrypt from 'bcrypt'
import { Strategy as LocalStrategy } from 'passport-local'
import { userInterface } from 'src/typings/sharedInterfaces'

//serialize -> we provide user id(which is saved in the session) in second arg done function
// then  its used to get whole obj in deserialize,serialize determines which data of user is stored in sess
// its triggered after succes in local strategy and when we want to log user by passport.logIn
passport.serializeUser((user, done: Function) => {
  done(
    null,
    // @ts-ignore
    user._id.toString()
  )
})
//key (in this case : id) is stored in memory, fetched obj is attached as req.user.deserializeUser when we
// send req with cookie containing a serialized user id
passport.deserializeUser((id: String, done: Function) => {
  User.findById(id, (err: any, user: any) => {
    done(err, user)
  })
})

//Local Strategy
passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email: string, password: unknown, done: Function) => {
      const selectedUser = await User.findOne({ email: email })
      //bad email
      if (!selectedUser) return done(null, false, { message: 'Wrong email' })
      // login
      try {
        bcrypt.compare(
          password as string,
          selectedUser.password,
          (err, isMatch) => {
            if (err) throw err
            if (isMatch) {
              return done(null, selectedUser) // logged in succesfully
            } else {
              return done(null, false, { message: 'Wrong password or email' })
            }
          }
        )
      } catch (error) {
        return done(null, false, { message: error })
      }
    }
  )
)
export default passport
