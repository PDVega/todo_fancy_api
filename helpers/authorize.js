const jwt = require('jsonwebtoken');
require('dotenv').config()

// module.exports = { 
//   registeredUser : (req, res, next) => {
//     let token = req.headers.token;
//     jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//       if(err){
//         res.send('You must login first!')
//       } else {
//         if(decoded){
//           next()
//         } else {
//         res.send('You are not authorized!')
//         }
//       }
//     }) 
//   }
// }


module.exports = { 
  userInfo : (token, callback) => {
    if(token){
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(decoded){
          // console.log(decoded);
          callback(decoded)
        } else {
          return 'You are not authorized!'
        }
      }) 
    } else {
      return 'You must login first!'
    }
  }
}
