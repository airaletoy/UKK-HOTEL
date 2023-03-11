// const jwt = require("jsonwebtoken");
// const db = require("../models");
// const User = db.user


// verifyToken = (req, res, next) => {
//     let token = req.headers["x-access-token"];
  
//     if (!token) {
//       return res.status(400).send({
//         message: "No token provided!"
//       });
//     }
  
//     jwt.verify(token, config.secret, (err, decoded) => {
//       if (err) {
//         return res.status(401).send({
//           message: "Unauthorized!"
//         });
//       }
//       req.id_user = decoded.id;
//       next();
//     });
//   };

//   isAdmin = (req, res, next) => {
//     User.findByPk(req.id).then(user => {
//         if(user.role === 'admin') {
//             next();
//             return;
//         }

//         res.status(400).send({
//             message: 'Dibutuhkan role kasir'
//         })
//     })
//   }

//   isResepsionis = (req, res, next) => {
//     User.findByPk(req.id).then(user => {
//         if(user.role === 'resepsionis') {
//             next();
//             return;
//         }

//         res.status(400).send({
//             message: 'Dibutuhkan role resepsionis'
//         })
//     })
//   }

//   const authJwt = {
//     verifyToken: verifyToken,
//     isAdmin: isAdmin,
//     isResepsionis: isResepsionis
//   }

//   module.exports = authJwt;
        
      
    
