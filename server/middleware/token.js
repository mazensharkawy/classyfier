import jwt from 'jsonwebtoken'
import keys from '../keys'
export default (req, res, next) => {
  let token = req.header('Authorization')

  if (!token) {
    req.User = null
    next()
    return
  }

  // example for header Authorization bearer .....JWT.......;
  token = token.split(' ').pop()

  req.User = jwt.decode(token, keys.publicKey)
  next()
}
